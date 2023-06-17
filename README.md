# Ordinals Collections Standards

#### A place for creators &amp; builders to organize ordinal collections!

## Getting Started

**_Artists_**

Collection creators can format their collection data using the `inscriptions.json` and `meta.json` format below to be listed on all platforms using the standard!

**_Steps_**

1. Create your `inscriptions.json` and `meta.json` files in the format provided below
    - Check out [this](https://ordinals-metadata-composer.vercel.app/) file formatting tool!
2. Add to the registry by creating a pull request including new collections that follow the standard
3. Websites can use the registry to include the ordinal collections provided on their websites!

## File Structure

```
 .
 ├── ...
 └── collections
     └── [collection-name]
          ├── inscriptions.json
          └── meta.json
```

## Collection Metadata `meta.json`

```
{
  "name": "",                    # inscription name
  "inscription_icon": "",        # collection cover inscription id
  "supply": "",                  # total supply
  "slug": "",                    # directory name
  "description": "",             # collection description
  "twitter_link": "",            # official twitter
  "discord_link": "",            # official discord
  "website_link": ""             # official website
}
```

## Inscription Data `inscriptions.json`

```
[
  {
    "id": "",                    # inscription id
    "meta": {
      "name": ""                 # inscription name
    }
  },
  ...
]
```

## Expanding Inscription Data

Collections can be organized using `status` and `rank`

```
[
  {
    "id": "",
    "meta": {
      "name": "",
      "status": "",               # inscription theme
      "rank":                     # inscription rarity rank
    }
  },
  ...
]
```

Artists can assign unqiue traits to ordinals with `attributes`

```
[
  {
    "id": "",
    "meta": {
      "status": "",
      "rank": ,
      "name": ""
      "attributes": [
        {
          "trait_type": "",        # trait category
          "value": "",             # trait value
          "status": "",            # trait theme
          "percent": ""            # percent of inscriptions in collection with trait
        },
        ...
      ]
    }
  },
  ...
]
```

## Here is an example of a completed collection inscription

Your meta.json file will look like this:

```
{
  "name": "Planetary Ordinals",
  "inscription_icon": "98da33abe2045ec1421fcf1bc376dea5beb17ded15aa70ca5da490f50d95a6d9i0",
  "supply": "69",
  "slug": "planetary-ordinals",
  "description": "",
  "twitter_link": "https://twitter.com/ordinalswallet",
  "discord_link": "https://discord.com/invite/ordinalswallet",
  "website_link": ""
}
```

Your inscriptions.json file will look like this:

```
[
  {
    "id": "af0b19432a676551223e300e7197348b7c225cb7b31d0d7c6e246e382cbf6f81i0",
    "meta": {
      "name": "Planetary Ordinal #11",
      "status": "Rare",
      "rank": 8,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Sun sun",
          "status": "Rare",
          "percent": "2.90%"
        },
        {
          "trait_type": "Holes",
          "value": "rose blossom",
          "status": "Rare",
          "percent": "2.90%"
        }
      ]
    }
  },
  {
    "id": "9f0bfadb03c137c54d2a77768f61691eee2ccf64ad307109b92c14b76d73c28ai0",
    "meta": {
      "name": "Planetary Ordinal #7",
      "status": "Common",
      "rank": 58,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Darkness",
          "status": "Common",
          "percent": "34.78%"
        },
        {
          "trait_type": "Holes",
          "value": "grey skies",
          "status": "Uncommon",
          "percent": "4.35%"
        }
      ]
    }
  },
  {
    "id": "0a018e711422ad7dbddbab59d1b111a6eae6d407fffe33f4c42107a840d4f3efi0",
    "meta": {
      "name": "Planetary Ordinal #67",
      "status": "Uncommon",
      "rank": 27,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Horizon",
          "status": "Rare",
          "percent": "2.90%"
        },
        {
          "trait_type": "Holes",
          "value": "air weaver",
          "status": "Common",
          "percent": "5.80%"
        }
      ]
    }
  },
  {
    "id": "70f86f36af876b16fc67ba3771095d94aa704ab37481cc0333966f08cde7c744i0",
    "meta": {
      "name": "Planetary Ordinal #22",
      "status": "Epic",
      "rank": 4,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Sugar sweet",
          "status": "Epic",
          "percent": "1.45%"
        },
        {
          "trait_type": "Holes",
          "value": "sunset",
          "status": "Common",
          "percent": "4.35%"
        }
      ]
    }
  },
  {
    "id": "759974ab9d22955ba6c69d0997ae0f4902a790b104ae6cf40a5a372b68fecebai0",
    "meta": {
      "name": "Planetary Ordinal #1",
      "status": "Common",
      "rank": 46,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Darkness",
          "status": "Common",
          "percent": "34.78%"
        },
        {
          "trait_type": "Holes",
          "value": "skies working",
          "status": "Legendary",
          "percent": "1.45%"
        }
      ]
    }
  },
  {
    "id": "ddbd767b66bc054bef3910f2fa01e543976f33baaa427a864b43095b939bbd56i0",
    "meta": {
      "name": "Planetary Ordinal #61",
      "status": "Epic",
      "rank": 6,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Grey stays",
          "status": "Common",
          "percent": "4.35%"
        },
        {
          "trait_type": "Holes",
          "value": "earthy vibes",
          "status": "Epic",
          "percent": "1.45%"
        }
      ]
    }
  },
  {
    "id": "94534dd9e91f13953fc98dff06b6f194097298596f20d84abdbe8600d8d20425i0",
    "meta": {
      "name": "Planetary Ordinal #23",
      "status": "Uncommon",
      "rank": 19,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Bloody ice",
          "status": "Uncommon",
          "percent": "4.35%"
        },
        {
          "trait_type": "Holes",
          "value": "air weave",
          "status": "Rare",
          "percent": "2.90%"
        }
      ]
    }
  },
  {
    "id": "bdffb15e0ea6cbbbcc5b3e57f7c550efb1ac082c7ba53bac9f7fa14b729cf595i0",
    "meta": {
      "name": "Planetary Ordinal #46",
      "status": "Rare",
      "rank": 14,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Vanilla ice",
          "status": "Epic",
          "percent": "1.45%"
        },
        {
          "trait_type": "Holes",
          "value": "small lake",
          "status": "Common",
          "percent": "7.25%"
        }
      ]
    }
  },
  {
    "id": "80b4b07543006624df60d7595a8a634180dbbc63931a8cf5f2ba1add02d76661i0",
    "meta": {
      "name": "Planetary Ordinal #49",
      "status": "Rare",
      "rank": 15,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Ice wall",
          "status": "Rare",
          "percent": "1.45%"
        },
        {
          "trait_type": "Holes",
          "value": "purple rain",
          "status": "Common",
          "percent": "7.25%"
        }
      ]
    }
  },
  {
    "id": "1f769789b2bb6821cd9efd60a9ceb327ff0eaad3f62a106c7e5ac12ca9e9eb62i0",
    "meta": {
      "name": "Planetary Ordinal #38",
      "status": "Common",
      "rank": 49,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Darkness",
          "status": "Common",
          "percent": "34.78%"
        },
        {
          "trait_type": "Holes",
          "value": "princess drip",
          "status": "Epic",
          "percent": "1.45%"
        }
      ]
    }
  },
  {
    "id": "095de9f14e5013b16b26214df1612bc931dc1cc37b645138028d6da0d0bb700ci0",
    "meta": {
      "name": "Planetary Ordinal #18",
      "status": "Uncommon",
      "rank": 18,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Horizon",
          "status": "Rare",
          "percent": "2.90%"
        },
        {
          "trait_type": "Holes",
          "value": "sunny day",
          "status": "Uncommon",
          "percent": "4.35%"
        }
      ]
    }
  },
  {
    "id": "c4755d6948f1586968661759b90655e0deb11235362b47a8f67619953df24c99i0",
    "meta": {
      "name": "Planetary Ordinal #51",
      "status": "Rare",
      "rank": 11,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Earthy vibes",
          "status": "Uncommon",
          "percent": "2.90%"
        },
        {
          "trait_type": "Holes",
          "value": "purple sky",
          "status": "Rare",
          "percent": "2.90%"
        }
      ]
    }
  },
  {
    "id": "a0db132c57ce7d23ce1a19b3a43af562a978c172aa3fde208a846bde6691d96di0",
    "meta": {
      "name": "Planetary Ordinal #64",
      "status": "Uncommon",
      "rank": 26,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Caterpillar ovaries",
          "status": "Uncommon",
          "percent": "2.90%"
        },
        {
          "trait_type": "Holes",
          "value": "icey rares",
          "status": "Common",
          "percent": "5.80%"
        }
      ]
    }
  },
  {
    "id": "91332ca48d3554acac9dc673089b77abb79428de717972c8765cee8547795bd2i0",
    "meta": {
      "name": "Planetary Ordinal #54",
      "status": "Common",
      "rank": 44,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Future vibes",
          "status": "Common",
          "percent": "4.35%"
        },
        {
          "trait_type": "Holes",
          "value": "small lake",
          "status": "Common",
          "percent": "7.25%"
        }
      ]
    }
  },
  {
    "id": "0fd0635dfd3cf5815b5ce29bde3cd77f17759f2c97c94bce84132af9d917abcbi0",
    "meta": {
      "name": "Planetary Ordinal #50",
      "status": "Common",
      "rank": 36,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Earthy vibes",
          "status": "Uncommon",
          "percent": "2.90%"
        },
        {
          "trait_type": "Holes",
          "value": "blinded sky",
          "status": "Common",
          "percent": "7.25%"
        }
      ]
    }
  },
  {
    "id": "bb85b18158202070ebabfb9846ef2e6203241cd22381c018232fa685215fd4cci0",
    "meta": {
      "name": "Planetary Ordinal #69",
      "status": "Rare",
      "rank": 13,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Icey rares",
          "status": "Rare",
          "percent": "2.90%"
        },
        {
          "trait_type": "Holes",
          "value": "air bender",
          "status": "Uncommon",
          "percent": "2.90%"
        }
      ]
    }
  },
  {
    "id": "9f295fcc0be32d3cc41d6fe419e2d4985755bc608538f7ea86ffea2c58c9e821i0",
    "meta": {
      "name": "Planetary Ordinal #13",
      "status": "Rare",
      "rank": 17,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Dark and ugly",
          "status": "Uncommon",
          "percent": "4.35%"
        },
        {
          "trait_type": "Holes",
          "value": "happy times",
          "status": "Rare",
          "percent": "2.90%"
        }
      ]
    }
  },
  {
    "id": "7ca91509b709fdfa0b160295bccbe3bf992f444f695ea6b20d69b02bda3a89fdi0",
    "meta": {
      "name": "Planetary Ordinal #12",
      "status": "Rare",
      "rank": 9,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Icey rares",
          "status": "Rare",
          "percent": "2.90%"
        },
        {
          "trait_type": "Holes",
          "value": "fire",
          "status": "Rare",
          "percent": "2.90%"
        }
      ]
    }
  },
  {
    "id": "e7c5ac3a6d04e66c785b3704d1c27aaed33df420272f2f0e8bc99118375ec477i0",
    "meta": {
      "name": "Planetary Ordinal #9",
      "status": "Common",
      "rank": 48,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Darkness",
          "status": "Common",
          "percent": "34.78%"
        },
        {
          "trait_type": "Holes",
          "value": "sun sun",
          "status": "Epic",
          "percent": "1.45%"
        }
      ]
    }
  },
  {
    "id": "6dcaa4e184ff0f6c6407dee996d096f640321fa0184a29ea39d60eec81c8f517i0",
    "meta": {
      "name": "Planetary Ordinal #65",
      "status": "Legendary",
      "rank": 1,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Darkness three",
          "status": "Rare",
          "percent": "1.45%"
        },
        {
          "trait_type": "Holes",
          "value": "sweet rain",
          "status": "Uncommon",
          "percent": "2.90%"
        }
      ]
    }
  },
  {
    "id": "aea7ebc88268a669b1899134d2fb1775b89b84a38d4c51a25ab1482c2e134de3i0",
    "meta": {
      "name": "Planetary Ordinal #25",
      "status": "Uncommon",
      "rank": 20,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Blind sights",
          "status": "Uncommon",
          "percent": "2.90%"
        },
        {
          "trait_type": "Holes",
          "value": "grasshopper",
          "status": "Common",
          "percent": "4.35%"
        }
      ]
    }
  },
  {
    "id": "7f2a20d1a1e65fdf4791a31a597618472a49abd792bb5e7c12fea3de904214bei0",
    "meta": {
      "name": "Planetary Ordinal #31",
      "status": "Common",
      "rank": 52,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Darkness",
          "status": "Common",
          "percent": "34.78%"
        },
        {
          "trait_type": "Holes",
          "value": "air bender",
          "status": "Uncommon",
          "percent": "2.90%"
        }
      ]
    }
  },
  {
    "id": "e9dd57d70ce95daf70846e66ef4be197cef0f35eed9aea80b460601c6098417ei0",
    "meta": {
      "name": "Planetary Ordinal #20",
      "status": "Uncommon",
      "rank": 29,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Dark and ugly",
          "status": "Uncommon",
          "percent": "4.35%"
        },
        {
          "trait_type": "Holes",
          "value": "sunset",
          "status": "Common",
          "percent": "4.35%"
        }
      ]
    }
  },
  {
    "id": "f66610d96fddf595a3ccfeb988d06533c3182dbfac5cc388188d90fd0ec62ce3i0",
    "meta": {
      "name": "Planetary Ordinal #53",
      "status": "Uncommon",
      "rank": 22,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Sunny deez",
          "status": "Common",
          "percent": "4.35%"
        },
        {
          "trait_type": "Holes",
          "value": "iceland",
          "status": "Uncommon",
          "percent": "2.90%"
        }
      ]
    }
  },
  {
    "id": "85fb76bcfa934ba6d4f29e75477bad422f728d0c27eb02ea7854f021ea371bc5i0",
    "meta": {
      "name": "Planetary Ordinal #33",
      "status": "Common",
      "rank": 35,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Purple rain",
          "status": "Uncommon",
          "percent": "2.90%"
        },
        {
          "trait_type": "Holes",
          "value": "purple rain",
          "status": "Common",
          "percent": "7.25%"
        }
      ]
    }
  },
  {
    "id": "180330ecdd735ec69f8412ca65b3caea4bd994cc48b7a3e58c8f88c6414bf2cdi0",
    "meta": {
      "name": "Planetary Ordinal #8",
      "status": "Common",
      "rank": 68,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Darkness",
          "status": "Common",
          "percent": "34.78%"
        },
        {
          "trait_type": "Holes",
          "value": "blinded sky",
          "status": "Common",
          "percent": "7.25%"
        }
      ]
    }
  },
  {
    "id": "f7b38ecfbaae6b0f592604434a0313eb54de47cb34822c9c10349943459f3c08i0",
    "meta": {
      "name": "Planetary Ordinal #17",
      "status": "Common",
      "rank": 65,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Darkness",
          "status": "Common",
          "percent": "34.78%"
        },
        {
          "trait_type": "Holes",
          "value": "icey rares",
          "status": "Common",
          "percent": "5.80%"
        }
      ]
    }
  },
  {
    "id": "14974c546303bf1320743dd8c2e63b23091e47aeaaf65e3d25319639d839e9cei0",
    "meta": {
      "name": "Planetary Ordinal #68",
      "status": "Common",
      "rank": 39,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Grey stays",
          "status": "Common",
          "percent": "4.35%"
        },
        {
          "trait_type": "Holes",
          "value": "icey rares",
          "status": "Common",
          "percent": "5.80%"
        }
      ]
    }
  },
  {
    "id": "a4a4a2f4ed24bdafc76cf9433ac7f76550a9cd86a0b306e40399cebcfd41e868i0",
    "meta": {
      "name": "Planetary Ordinal #35",
      "status": "Uncommon",
      "rank": 21,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Red snow",
          "status": "Uncommon",
          "percent": "2.90%"
        },
        {
          "trait_type": "Holes",
          "value": "sunny day",
          "status": "Uncommon",
          "percent": "4.35%"
        }
      ]
    }
  },
  {
    "id": "0782cbdfad58eef6a5053cbbf3245558dff8d02ece1e694032e5d9693c7c4fdfi0",
    "meta": {
      "name": "Planetary Ordinal #5",
      "status": "Rare",
      "rank": 16,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Future kinds",
          "status": "Rare",
          "percent": "2.90%"
        },
        {
          "trait_type": "Holes",
          "value": "red snow",
          "status": "Uncommon",
          "percent": "4.35%"
        }
      ]
    }
  },
  {
    "id": "cfec0fbd2ea712cf86cc13703a57f5b7a4c636da232fe8c3a4959524319b0328i0",
    "meta": {
      "name": "Planetary Ordinal #66",
      "status": "Uncommon",
      "rank": 25,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Red snow",
          "status": "Uncommon",
          "percent": "2.90%"
        },
        {
          "trait_type": "Holes",
          "value": "grey skies",
          "status": "Uncommon",
          "percent": "4.35%"
        }
      ]
    }
  },
  {
    "id": "b3aaad294a7c48be6730e80410bb0f62141c27cd485b42f9d6aa4f1669fa226ai0",
    "meta": {
      "name": "Planetary Ordinal #30",
      "status": "Common",
      "rank": 61,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Darkness",
          "status": "Common",
          "percent": "34.78%"
        },
        {
          "trait_type": "Holes",
          "value": "red snow",
          "status": "Uncommon",
          "percent": "4.35%"
        }
      ]
    }
  },
  {
    "id": "79fa348c23fbb10282f6e4e78e2605bdfce51d263140bbc93a6ef19b7af2632ci0",
    "meta": {
      "name": "Planetary Ordinal #55",
      "status": "Common",
      "rank": 37,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Blind sights",
          "status": "Uncommon",
          "percent": "2.90%"
        },
        {
          "trait_type": "Holes",
          "value": "small lake",
          "status": "Common",
          "percent": "7.25%"
        }
      ]
    }
  },
  {
    "id": "87fff1ce9cf526c51d42567c7b8c2f57528c7e83f08519775be989c744288ceei0",
    "meta": {
      "name": "Planetary Ordinal #59",
      "status": "Common",
      "rank": 56,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Darkness",
          "status": "Common",
          "percent": "34.78%"
        },
        {
          "trait_type": "Holes",
          "value": "iceland",
          "status": "Uncommon",
          "percent": "2.90%"
        }
      ]
    }
  },
  {
    "id": "98da33abe2045ec1421fcf1bc376dea5beb17ded15aa70ca5da490f50d95a6d9i0",
    "meta": {
      "name": "Planetary Ordinal #2",
      "status": "Common",
      "rank": 47,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Darkness",
          "status": "Common",
          "percent": "34.78%"
        },
        {
          "trait_type": "Holes",
          "value": "future vibes",
          "status": "Legendary",
          "percent": "1.45%"
        }
      ]
    }
  },
  {
    "id": "15e3761e082e19602dd06606ef01098032b73b23cff6206ea0eb9d6a3549919ci0",
    "meta": {
      "name": "Planetary Ordinal #6",
      "status": "Rare",
      "rank": 7,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Sweet rain",
          "status": "Legendary",
          "percent": "1.45%"
        },
        {
          "trait_type": "Holes",
          "value": "air weaver",
          "status": "Common",
          "percent": "5.80%"
        }
      ]
    }
  },
  {
    "id": "a5782446f5da9df6bd017a17bcae2294de92a7f1eb4929ffe3be403b35977472i0",
    "meta": {
      "name": "Planetary Ordinal #58",
      "status": "Uncommon",
      "rank": 23,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Caterpillar ovaries",
          "status": "Uncommon",
          "percent": "2.90%"
        },
        {
          "trait_type": "Holes",
          "value": "sesame",
          "status": "Common",
          "percent": "4.35%"
        }
      ]
    }
  },
  {
    "id": "afc450753cdf9c0a7ca4809da3a3d4f3b526411356aa52491980cde898dbee7ei0",
    "meta": {
      "name": "Planetary Ordinal #45",
      "status": "Common",
      "rank": 64,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Darkness",
          "status": "Common",
          "percent": "34.78%"
        },
        {
          "trait_type": "Holes",
          "value": "sunset",
          "status": "Common",
          "percent": "4.35%"
        }
      ]
    }
  },
 ...
]
```
