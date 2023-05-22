migrate((db) => {
  const collection = new Collection({
    "id": "jfo1e9jbcxxo2hy",
    "created": "2023-05-21 23:41:24.531Z",
    "updated": "2023-05-21 23:41:24.531Z",
    "name": "personajes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zjmabl80",
        "name": "race",
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
        "id": "tft0awsj",
        "name": "category",
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
        "id": "evfxvt0b",
        "name": "level",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "cgumdgda",
        "name": "lore",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("jfo1e9jbcxxo2hy");

  return dao.deleteCollection(collection);
})
