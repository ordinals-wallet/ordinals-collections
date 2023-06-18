import os
import json
COLLECTIONS = "./collections"
def test_home_structure():
    expected_directories = [
        "LICENSE",
        "requirements.txt",
        ".pytest_cache",
        "tests",
        "README.md",
        "env",
        ".gitignore",
        ".git",
        "collections",
        ".circleci",
        "notebooks",
        "scripts",
        ".DS_Store"
    ]
    current_directories = os.listdir()
    correct_directories = [x in expected_directories for x in current_directories]
    assert all(correct_directories), 'Top level changes are not allowed'
def test_collections_structure():
    current_collections = os.listdir(COLLECTIONS)
    folders = [
        not os.path.isfile("{}/{}".format(COLLECTIONS, x)) for x in current_collections
    ]
    assert all(folders), 'Invalid structure, include your files in a nested directory'
def test_meta():
    expected_meta = {
        "name": "Based Apes",
        "inscription_icon": "159f5b1437375424ba798c92f10670f19baf3e5d10be3bf5fbd4d4a50cf642ddi0",
        "supply": "100",
        "slug": "based-apes",
        "description": "",
        "twitter_link": "https://twitter.com/BasedApes",
        "discord_link": "https://discord.com/invite/ordinalswallet",
        "website_link": "",
    }
    current_collections = os.listdir(COLLECTIONS)
    for x in current_collections:
        with open("{}/{}/meta.json".format(COLLECTIONS, x), "r") as file:
            meta = json.load(file)
        assert set(meta.keys()) == set(expected_meta.keys()) , 'Invalid meta data keys'
        for y in zip(meta.values(), meta.keys()):
          assert isinstance(y[0], str) , 'Invalid data type, use a string'
          if y[1].endswith('link'):
            if y[0]:
                assert y[0].startswith('https://') or y[0].startswith('http://'), 'link must start with https://'
        assert (len(meta.get('inscription_icon')) == 66) or meta.get('inscription_icon'), 'Invalid inscription Id'
        assert meta.get('slug').lower() == meta.get('slug'), 'Slug must be lowercase'
        assert len(meta.get('name')) <= 60, 'Name is too long'
        assert len(meta.get('slug')) < 60, 'Slug is too long'
        assert meta.get('slug') == x, 'Slug does not match directory name'
def ishex(s):
    try:
        n = int(s,16)
        return True
    except ValueError:
        return False
def test_inscriptions():
    current_collections = os.listdir(COLLECTIONS)
    for x in current_collections:
        with open("{}/{}/inscriptions.json".format(COLLECTIONS, x), "r") as file:
with open("path/to/collections/example_collection/meta.json", "r") as file:
    # ファイルの読み込み処理
            inscriptions = json.load(file)
        for y in inscriptions:
          assert y.get('id')
@@ -106,4 +107,4 @@ def test_uniqueness():
      all_inscription_ids = all_inscription_ids + inscription_ids
      duplicates = len(all_inscription_ids) - len(set(all_inscription_ids))
      assert duplicates == 0
