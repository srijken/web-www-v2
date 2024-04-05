const fs = require('fs');
const yargs = require('yargs');
const axios = require('axios');
const matter = require('gray-matter');

const argv = yargs
  .option('team-path', {
    describe: 'path of directory to create team md files',
    type: 'string',
    demandOption: true,
    default: './content/who-we-are/team'
  })
  .help()
  .alias('help', 'h')
  .argv;

const url = 'https://prod-graphql-api.theorg.com/graphql';
const headers = { 'Content-Type': 'application/json' };

const fetchTeamsAndMembers = async () => {
  const payload = {
    operationName: "teamsByCompany",
    variables: {
      companySlug: "dutch-institute-for-vulnerability-disclosure",
      membersLimit: 500,
      offset: 0,
      limit: 500,
    },
    query: `query teamsByCompany($companySlug: String!, $limit: Int!, $offset: Int!, $membersLimit: Int!) {
      teamsByCompany(companySlug: $companySlug, limit: $limit, offset: $offset) {
        id
        slug
        name
        memberCount
        members(limit: $membersLimit) {
          id
          slug
          fullName
          role
        }
      }
    }`
  };

  try {
    const response = await axios.post(url, payload, { headers });
    console.log("Updating teams");

    const teamsFilePath = `${argv['team-path']}/_index.en.md`;
    let existingContent = '';
    let existingTeams = [];

    if (fs.existsSync(teamsFilePath)) {
      const fileContent = fs.readFileSync(teamsFilePath, 'utf8');
      const parsedContent = matter(fileContent);
      existingContent = parsedContent.content;
      existingTeams = parsedContent.data.teams || [];
    }

    const fetchedTeams = response.data.data.teamsByCompany;

    // Merge existing and fetched team data
    existingTeams.forEach(existingTeam => {
      process.stdout.write(".");
      const fetchedTeam = fetchedTeams.find(team => team.name === existingTeam.title);
      if (fetchedTeam) {
        // Update members only if they are not already in existingTeam
        const existingMemberSlugs = new Set(existingTeam.members.map(member => member.split('/').pop()));
        fetchedTeam.members.forEach(member => {
          const memberSlug = `/who-we-are/team/people/${member.slug}`;
          if (!existingMemberSlugs.has(member.slug)) {
            existingTeam.members.push(memberSlug);
          }
        });
      }
    });

    // Add new teams from fetched data if they don't exist in existingTeams
    fetchedTeams.forEach(fetchedTeam => {
      process.stdout.write(".");
      if (!existingTeams.some(existingTeam => existingTeam.title === fetchedTeam.name)) {
        existingTeams.push({
          title: fetchedTeam.name,
          description: '',
          members: fetchedTeam.members.map(member => `/who-we-are/team/people/${member.slug}`)
        });
      }
    });

    const fileData = {
      type: 'team',
      title: 'The Team',
      teams: existingTeams
    };

    const updatedContent = matter.stringify(existingContent, fileData);
    fs.writeFileSync(teamsFilePath, updatedContent);
    console.log("\ndone");
  } catch (error) {
    console.error("Failed to fetch teams and members:", error);
  }
};

const main = async () => {
  await fetchTeamsAndMembers();
};

main();
