migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mu7pjlty631aza2")

  collection.name = "menus"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mu7pjlty631aza2")

  collection.name = "menu"

  return dao.saveCollection(collection)
})
