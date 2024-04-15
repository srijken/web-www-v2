const fs = require('fs');
const path = require('path');
const yargs = require('yargs');
const axios = require('axios');
const matter = require('gray-matter');

const { argv } = yargs
  .option('member-path', {
    describe: 'path to directory to create member md files',
    type: 'string',
    demandOption: true,
    default: './content/who-we-are/team/people'
  })
  .help()
  .alias('help', 'h');

const doesDirExist = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    console.error('Error: Output directory does not exist.');
    return false;
  }
  return true;
};

const url = 'https://prod-graphql-api.theorg.com/graphql';
const headers = { 'Content-Type': 'application/json' };

const fetchPeople = async () => {
  const query = fs.readFileSync(path.join(__dirname, 'queries/fullCompany.graphql'), 'utf8');

  const payload = {
    operationName: 'Company',
    variables: { slug: 'dutch-institute-for-vulnerability-disclosure' },
    query
  };

  try {
    const response = await axios.post(url, payload, { headers });
    console.log('Updating people', '');

    if (response.data.error) {
      throw new Error(response.data.error);
    }

    console.log('Found %d people', response.data.data.company.nodes.length);

    // eslint-disable-next-line no-restricted-syntax
    for (const node of response.data.data.company.nodes) {
      if (node.leafMember) {
        const person = node.leafMember;
        const personFilePath = `${argv['member-path']}/${person.slug}.en.md`;

        const newPersonData = {
          type: 'people',
          title: person.fullName,
          image: person.profileImage ? `${person.profileImage.endpoint}/${person.profileImage.uri}` : '/images/people/image.png',
          role: person.role,
          intro: '',
          links: []
        };

        // Add social links
        if (person.social) {
          if (person.social.linkedInUrl) newPersonData.links.push({ name: 'LinkedIn', link: person.social.linkedInUrl });
          if (person.social.twitterUrl) newPersonData.links.push({ name: 'Twitter', link: person.social.twitterUrl });
          if (person.social.facebookUrl) newPersonData.links.push({ name: 'Facebook', link: person.social.facebookUrl });
          if (person.social.websiteUrl) newPersonData.links.push({ name: 'Website', link: person.social.websiteUrl });
        }

        if (fs.existsSync(personFilePath)) {
          const existingFile = fs.readFileSync(personFilePath, 'utf8');
          const existingContent = matter(existingFile);

          // Overwrite newPersonData.description and image with existing ones if available
          newPersonData.description = existingContent.data.description ?? person.description;
          newPersonData.image = existingContent.data.image ?? newPersonData.image;

          const updatedContent = matter.stringify(existingContent.content, { ...existingContent.data, ...newPersonData });
          fs.writeFileSync(personFilePath, updatedContent);
        } else {
          // Create new file with new data and markdown content
          const newFileContent = matter.stringify(person.description ?? '', newPersonData);
          fs.writeFileSync(personFilePath, newFileContent);
        }

        process.stdout.write('.');
      }
    }
    console.log('\ndone');
  } catch (error) {
    console.error('Failed to fetch people:', error);
  }
};

const main = async () => {
  if (doesDirExist(argv['member-path'])) {
    await fetchPeople();
  }
};

main();
