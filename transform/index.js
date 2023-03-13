import fs from 'fs';
import fetch from 'node-fetch';

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
  },
  {
    meta: {
      name: "sub10k",
      inscription_icon: "765cf24db22df4d7bae1cd12e5ee4780dc263486e426d8d1758eaa0515fa6fcei0",
      supply: "10000",
      slug: "sub10k",
      description: "sub10k is a collection of the first 10,000 inscriptions on Bitcoin.",
      twitter_link: "https://twitter.com/sub10k",
      discord_link: "https://discord.gg/sub10k",
      website_link: ""
    },
    inscriptions: JSON.parse(fs.readFileSync('./sub10k.json')),
    method: 'sub10k'
  },
  {
    meta: {
      name: "Chainspace",
      inscription_icon: "a6e1a0f1dea5ac2f1eb366db2d037bdcfcbd6adfc88f91456656ae7848b049c0i0",
      supply: "800",
      slug: "chainspace",
      description: "Chainspace is a BTC-native infinite art machine — a fully on-chain, stateless web app that transforms the viewer into generative art. In Chainspace, you are the art.",
      twitter_link: "https://twitter.com/chainspaceapp",
      discord_link: "https://discord.gg/chainspace",
      website_link: "https://chainspace.app"
    },
    inscriptions: fs.readFileSync('./chainspace.csv', 'utf8'),
    method: 'chainspace'
  },
  {
    meta: {
      name: "Twelvefold",
      inscription_icon: "e0b63360759c7e208b5e201156008fa1ef0199b404363bfafe46e8933d079efci0",
      supply: "300",
      slug: "twelvefold",
      description: "TwelveFold by Yuga Labs is a limited edition collection of 300 generative pieces, inscribed on satoshis on the Bitcoin blockchain.",
      twitter_link: "https://twitter.com/yugalabs",
      website_link: "https://twelvefold.io"
    },
    inscriptions: fs.readFileSync('./twelvefold.html', 'utf8'),
    method: 'twelvefold'
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
  },
  ['sub10k']: (collection) => {
    return collection.inscriptions;
  },
  ['twelvefold']: async (collection) => {
    let regex = /tx\/([a-zA-Z0-9]{64})/g
    let matches = collection.inscriptions.matchAll(regex);
    let transformed = [];

    let numberRegex = /<h1>Inscription ([0-9]+)/g
    let toSkip = [
      '7cf53a334f0bef4fb372a81fe65b063311553f9a7d4261c6787d3399ac79b4fdi0',
      '50e74f16f8f4f18c29e572ed466dde40a0878f30db6745467841e73b2f96ab34i0'
    ];

    let included = [];

    for (const match of matches) {
      let inscriptionHash = match[1]+'i0';
      if(toSkip.includes(inscriptionHash) || included.includes(inscriptionHash)) continue;
      let html = await fetch('https://ordinals.com/inscription/'+inscriptionHash).then(res => res.text());
      let numberMatches = html.matchAll(numberRegex);
      let numberMatch = numberMatches.next()['value']?.[1];
      if(!numberMatch) continue;
      included.push(inscriptionHash);
      console.log(numberMatch);
      transformed.push({
        id: inscriptionHash,
        meta: {
          name: `Inscription #${numberMatch}`
        }
      });
    }

    console.log(transformed.length);
    return transformed;
  },
  ['chainspace']: (collection) => {
    let csv = collection.inscriptions+"}";
    let rows = csv.split("\n");
    let transformed = [];
    for(let row of rows) {
      row = row.replace(/\"\"/g, '"').slice(0,-1);
      let cells = row.split(",");
      cells = cells.map((cell, i) => {
        if(i == 0) return cell;
        return cell.slice(1,-1);
      });
      let inscriptionId = cells[0];
      cells.splice(5,4);
      let meta = JSON.parse(cells.slice(1).join(","));
      transformed.push({
        id: inscriptionId,
        meta: meta
      });
    };
    return transformed;
  }
};

(async () => {
  for(let collection of toTransform) {
    let meta = collection.meta;
    let dir = '../collections/'+meta.slug;
    if(!fs.existsSync(dir)) fs.mkdirSync(dir);
    fs.writeFileSync(dir+"/meta.json", JSON.stringify(meta));

    let method = transformMethods[collection.method];
    let transformed = await method(collection);

    fs.writeFileSync(dir+"/inscriptions.json", JSON.stringify(transformed));
  }
})();