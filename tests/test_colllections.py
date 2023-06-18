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
        with open(f"{COLLECTIONS}/{x}/meta.json", "r") as file:
            try:
                meta = json.load(file)
            except json.JSONDecodeError as e:
                pytest.fail(f"Failed to decode JSON in {x}/meta.json: {str(e)}")

        assert set(meta.keys()) == set(expected_meta.keys()), 'Invalid meta data keys'

def ishex(s):
    try:
        n = int(s,16)
        return True
    except ValueError:
        return False


def test_inscriptions():
    current_collections = os.listdir(COLLECTIONS)

    for x in current_collections:
        with open(f"{COLLECTIONS}/{x}/meta.json", "r") as file:
            meta = json.load(file)

        # Fetch inscriptions from the meta object
        inscriptions = meta.get('inscriptions', [])

        for y in inscriptions:
            # Rest of the assertions

def test_uniqueness():
    input_collections = os.listdir(COLLECTIONS)

    for collection in input_collections:
        with open(f"{COLLECTIONS}/{collection}/inscriptions.json", "r") as file:
            try:
                inscriptions = json.load(file)
            except json.JSONDecodeError as e:
                pytest.fail(f"Failed to decode JSON in {collection}/inscriptions.json: {str(e)}")

        # Rest of the assertions







      
