const fs = require('fs');
const path = require('path');

const inscriptionMap = {};
const dir = fs.readdirSync(path.join(__dirname, '../collections'));
let count = 0;
for (let i = 0; i < dir.length; i++) {
    const item = dir[i];
    if (["<1k", "<10k", "<100k", "unisat-names", '.DS_Store'].includes(item)) {
        continue;
    }
    const file = path.join(__dirname, '../collections', item, 'inscriptions.json');
    const json = require(file);

    for (let i = 0; i < json.length; i++) {
        count++;
        if (count % 1000 == 0) {
            console.log("count: ", count);
        }
        if (!inscriptionMap[json[i].id]) {
            inscriptionMap[json[i].id] = true;
        } else {
            console.log("duplicate_id", json[i].id);
        }
    }

}