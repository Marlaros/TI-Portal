migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qroqhbpa5fnwf5g")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qroqhbpa5fnwf5g")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
