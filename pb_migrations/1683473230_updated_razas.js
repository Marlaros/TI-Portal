migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("inojkgdauu2xg9a")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "flwbyouy",
    "name": "images",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("inojkgdauu2xg9a")

  // remove
  collection.schema.removeField("flwbyouy")

  return dao.saveCollection(collection)
})
