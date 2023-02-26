import fs from 'fs';

let toTransform = [
  {
    meta: {
      name: 'Ordmojis',
      inscription_icon: 'ac63030375adc63e02876fcedf5145fe90a86ecfc3cf754396db30cb263f75b0i0',
      supply: '1870',
      slug: 'ordmojis',
      description: 'The first of each official Unicode Emoji to be inscribed on bitcoin',
      twitter_link: '',
      discord_link: '',
      website_link: 'https://ordmojis.com/'
    },
    inscriptions: JSON.parse(fs.readFileSync('./ordmojis.json')),
    method: 'ordmojis'
  }
]

let transformMethods = {
  ordmojis: (inscriptions) => {
    let transformed = [];
    let lowest = inscriptions.lowestEmojis;
    for(let ordmoji of Object.keys(lowest)) {
      let info = lowest[ordmoji];
      transformed.push({
        id: info.id,
        number: `${info.num}`,
        meta: {
          name: `Ordmoji - ${ordmoji}`
        }
      });
    }
    return transformed;
  }
};

for(let collection of toTransform) {
  let meta = collection.meta;
  let dir = '../collections/'+meta.slug;
  if(!fs.existsSync(dir)) fs.mkdirSync(dir);
  fs.writeFileSync(dir+"/meta.json", JSON.stringify(meta));

  let method = transformMethods[collection.method];
  let transformed = method(collection.inscriptions);

  fs.writeFileSync(dir+"/inscriptions.json", JSON.stringify(transformed));
}