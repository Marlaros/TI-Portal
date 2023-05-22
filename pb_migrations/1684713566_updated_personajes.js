migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jfo1e9jbcxxo2hy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7mpiy1ds",
    "name": "name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jfo1e9jbcxxo2hy")

  // remove
  collection.schema.removeField("7mpiy1ds")

  return dao.saveCollection(collection)
})
