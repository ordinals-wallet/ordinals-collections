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
  },
  {
    meta: {
      name: "Litecoin Punks",
      inscription_icon: "60f137a86bcc10bb55d45ceff8a10405a0c1da778c5de3b8a3c010464e6b8b5ai0",
      supply: "100",
      slug: "litecoin-punks",
      description: "Litecoin Punks are a collection of 100 early Litecoin Ordinals with inscriptions #642 to #834.",
      twitter_link: "https://twitter.com/LitecoinPunks",
      discord_link: "https://discord.gg/litecoinpunks",
      website_link: ""
    },
    inscriptions: JSON.parse(fs.readFileSync('./litecoin-punks.json')),
    method: 'litecoin-punks'
  }
]

let transformMethods = {
  ordmojis: (collection) => {
    let transformed = [];
    let lowest = collection.inscriptions.lowestEmojis;
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
  },
  ['litecoin-punks']: (collection) => {
    let transformed = [];
    let inscriptions = collection.inscriptions;
    let i = 1;
    for(let [number, inscription] of Object.entries(inscriptions)) {
      transformed.push({
        id: inscription,
        number: `${number}`,
        meta: {
          name: `Litecoin Punk #${i}`
        }
      });
      i++;
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
  let transformed = method(collection);

  fs.writeFileSync(dir+"/inscriptions.json", JSON.stringify(transformed));
}