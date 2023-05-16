migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("inojkgdauu2xg9a")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wpxi4c4e",
    "name": "image",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("inojkgdauu2xg9a")

  // remove
  collection.schema.removeField("wpxi4c4e")

  return dao.saveCollection(collection)
})
