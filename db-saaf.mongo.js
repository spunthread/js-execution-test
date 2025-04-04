db.getCollectionNames().forEach(function(collectionName) {
  db.getCollection(collectionName).drop();
});
