migrate((db) => {
  const collection = new Collection({
    "id": "mu7pjlty631aza2",
    "created": "2023-02-16 10:28:54.151Z",
    "updated": "2023-02-16 10:28:54.151Z",
    "name": "menu",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "otrpblds",
        "name": "cuisine",
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
        "id": "kupnagv9",
        "name": "dish",
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
  const collection = dao.findCollectionByNameOrId("mu7pjlty631aza2");

  return dao.deleteCollection(collection);
})
