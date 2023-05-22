migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jfo1e9jbcxxo2hy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "z5yaihwd",
    "name": "social_cat",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jfo1e9jbcxxo2hy")

  // remove
  collection.schema.removeField("z5yaihwd")

  return dao.saveCollection(collection)
})
