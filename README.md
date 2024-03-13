# Ordinals Collections Standards

#### A place for creators &amp; builders to organize ordinal collections

⚠️ This repository is now deprecated, please submit your collections to the creator dashboard for prompt listing

- [Bitcoin Creator Dashboard](https://ordinalswallet.com/creator-dashboard)
- [Doge Creator Dashboard](https://dpge.ordinalswallet.com/creator-dashboard)
- [Bells Creator Dashboard](https://bells.ordinalswallet.com/creator-dashboard)


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

Artists can assign unqiue traits to ordinals with `attributes`

```
[
  {
    "id": "",
    "meta": {
      "name": ""
      "attributes": [
        {
          "trait_type": "",        # trait category
          "value": "",             # trait value
        },
        ...
      ]
    }
  },
  ...
]
```

Your inscriptions.json file will look like this:

```
[
  {
    "id": "af0b19432a676551223e300e7197348b7c225cb7b31d0d7c6e246e382cbf6f81i0",
    "meta": {
      "name": "Planetary Ordinal #11",
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Sun sun",
        },
        {
          "trait_type": "Holes",
          "value": "rose blossom",
        }
      ]
    }
  }
]
```
