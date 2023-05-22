migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qroqhbpa5fnwf5g")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dldntqlc",
    "name": "appearence",
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
  const collection = dao.findCollectionByNameOrId("qroqhbpa5fnwf5g")

  // remove
  collection.schema.removeField("dldntqlc")

  return dao.saveCollection(collection)
})
