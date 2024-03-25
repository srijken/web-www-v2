const fs = require('fs');
const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .option('member-path', {
    describe: 'path of directory to create member md files',
    type: 'string',
    demandOption: true,
    default: './content/who-we-are/team/people'
  })
  .help()
  .alias('help', 'h')
  .argv;

/**
 * @param {string} dirPath Path to check
 * @returns {boolean} True if the path exists
 */
const doesDirExist = dirPath => {
    if (!fs.existsSync(dirPath)) {
        console.log("Error: Output directory does not exist.");

        return false;
    }

    return true;
};

/** Reverse engineered from theorg's website. No docs are available sadly. */
const url = 'https://prod-graphql-api.theorg.com/graphql';
const headers = { 'Content-Type': 'application/json' };

const fetchPeople = async () => {
  const payload = {
    operationName: "Company",
    variables: {
      slug: "dutch-institute-for-vulnerability-disclosure",
    },
    query: `query Company($slug: String!) {
      company(slug: $slug) {
        nodes {
          leafMember {
            id
            slug
            fullName
            profileImage {
              endpoint
              uri
              versions
            }
            role
            social {
              twitterUrl
              linkedInUrl
              facebookUrl
              websiteUrl
            }
            description
          }
        }
      }
    }`
  };

  try {
    const response = await axios.post(url, payload, { headers });
    console.log("Updating people", "");

    response.data.data.company.nodes.forEach(node => {
      if (node.leafMember) {
        const person = node.leafMember;
        // Note that we're hardcoding the .en.md for now since there is only support for 1 language in TheOrg
        const personFilePath = `${argv['member-path']}/${person.slug}.en.md`;

        let personFileContent = `---
type: people
title: "${person.fullName}"
image: ${person.profileImage ? `${person.profileImage.endpoint}/${person.profileImage.uri}.${person.profileImage.ext}` : '/images/people/image.png'}
role: "${person.role}"
intro: ${person.description || 'Blabla'}
featured_articles:
  - /newsroom/articles/test-article
links:
`;
        if (person.social) {
          if (person.social.linkedInUrl) personFileContent += `  - name: LinkedIn\n    link: ${person.social.linkedInUrl}\n`;
          if (person.social.twitterUrl) personFileContent += `  - name: Twitter\n    link: ${person.social.twitterUrl}\n`;
          if (person.social.facebookUrl) personFileContent += `  - name: Facebook\n    link: ${person.social.facebookUrl}\n`;
          if (person.social.websiteUrl) personFileContent += `  - name: Website\n    link: ${person.social.websiteUrl}\n`;
        }

        if (person.description) {

            personFileContent += '---\n';
            personFileContent += `Tekst ${person.description}`;
        }

        fs.writeFileSync(personFilePath, personFileContent);
        process.stdout.write(".");
      }
    });
    console.log("done");
  } catch (error) {
    console.error("Failed to fetch people:", error);
  }
};

const main = async () => {
  await fetchPeople();
};

if (doesDirExist(argv['member-path'])) {
    main();
}
