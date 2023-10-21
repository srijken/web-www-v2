const fs = require('fs');
const lunr = require('lunr');

// Read the Hugo-generated JSON file
fs.readFile('public/search/index.json', 'utf8', (err, data) => {
	if (err) {
		console.error('Error reading JSON file:', err);
		return;
	}

	// Parse the JSON data
	const documents = JSON.parse(data);

	// Create a Lunr.js index
	const idx = lunr(function () {
		this.ref('title');
		this.field('title');
		this.field('content');
		this.field('type');

		documents.forEach((doc, index) => {
			this.add({
				title: doc.title,
				content: doc.content,
				type: doc.type,
			});
		});
	});

	// Save the pre-built Lunr.js index
	fs.writeFile('public/search/prebuild.json', JSON.stringify(idx), (err) => {
		if (err) {
			console.error('Error writing pre-built index:', err);
		} else {
			console.log('Pre-built index created successfully.');
		}
	});
});
