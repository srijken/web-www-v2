const fs = require('fs');
const yargs = require('yargs');
const axios = require('axios');

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
    console.log("Updating teams", "");
    let teamsContent = `---
type: team
title: The Team
teams:
`;
    response.data.data.teamsByCompany.forEach(team => {
      teamsContent += `  - title: ${team.name}\n`;
      teamsContent += `    description: >-\n      Lorum Ipsum Bla Bla Bla\n`;
      teamsContent += `    members:\n`;
      team.members.forEach(member => {
        teamsContent += `      - /who-we-are/team/people/${member.slug}\n`;
      });
    });
    teamsContent += '---';

    const teamsFilePath = `${argv['team-path']}/teams.md`;
    fs.writeFileSync(teamsFilePath, teamsContent);
    console.log("done");
  } catch (error) {
    console.error("Failed to fetch teams and members:", error);
  }
};

const main = async () => {
  await fetchTeamsAndMembers();
};

main();
