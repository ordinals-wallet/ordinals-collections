const fs = require('fs');
const path = require('path');

const collectionsDir = './collections';

// An array to hold all the meta data from the subfolders
let metaArray = [];

// Read the contents of the collections directory
fs.readdir(collectionsDir, (err, files) => {
  if (err) {
    console.error(`Error reading directory: ${err}`);
    return;
  }

  // Loop through each subfolder
  for (const file of files) {
    const subFolderPath = path.join(collectionsDir, file);

    // Only process subfolders, not files
    if (!fs.lstatSync(subFolderPath).isDirectory()) {
      continue;
    }

    const metaPath = path.join(subFolderPath, 'meta.json');
    const inscriptionsPath = path.join(subFolderPath, 'inscriptions.json');

    // Read the contents of the meta.json and inscriptions.json files
    const meta = JSON.parse(fs.readFileSync(metaPath));
    const inscriptions = JSON.parse(fs.readFileSync(inscriptionsPath));

    // Add the inscriptions to the meta object
    meta.inscriptions = inscriptions;

    // Add the meta data to the array
    metaArray.push(meta);
  }

  // Write the array to a file
  const outputFilePath = path.join('./master.json');
  fs.writeFileSync(outputFilePath, JSON.stringify(metaArray, null, 2));

  console.log(`Master JSON file written to: ${outputFilePath}`);
});
