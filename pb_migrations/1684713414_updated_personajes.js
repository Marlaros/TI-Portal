migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jfo1e9jbcxxo2hy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c5wle0nb",
    "name": "attributes",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jfo1e9jbcxxo2hy")

  // remove
  collection.schema.removeField("c5wle0nb")

  return dao.saveCollection(collection)
})
