migrate((db) => {
  const collection = new Collection({
    "id": "qroqhbpa5fnwf5g",
    "created": "2023-05-21 23:51:49.033Z",
    "updated": "2023-05-21 23:51:49.033Z",
    "name": "descripciones",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vinfcu7c",
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
        "id": "4y5ynlk9",
        "name": "description",
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
  const collection = dao.findCollectionByNameOrId("qroqhbpa5fnwf5g");

  return dao.deleteCollection(collection);
})
