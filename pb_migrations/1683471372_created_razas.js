migrate((db) => {
  const collection = new Collection({
    "id": "inojkgdauu2xg9a",
    "created": "2023-05-07 14:56:12.182Z",
    "updated": "2023-05-07 14:56:12.182Z",
    "name": "razas",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "twl0ybpr",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "lumicu1l",
        "name": "short_desc",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "gdwaekcr",
        "name": "details",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "lidkvysd",
        "name": "image",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("inojkgdauu2xg9a");

  return dao.deleteCollection(collection);
})
