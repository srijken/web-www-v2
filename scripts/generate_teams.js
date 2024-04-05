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

    const fetchedTeams = response.data.data.teamsByCompany.map(team => ({
      title: team.name,
      members: team.members.map(member => `/who-we-are/team/people/${member.slug}`)
    }));

    // Update existing team members and descriptions, add new teams as necessary
    fetchedTeams.forEach(fetchedTeam => {
      process.stdout.write(".");
      const existingTeam = existingTeams.find(et => et.title === fetchedTeam.title);
      if (existingTeam) {
        existingTeam.members = fetchedTeam.members;
      } else {
        existingTeams.push(fetchedTeam);
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
