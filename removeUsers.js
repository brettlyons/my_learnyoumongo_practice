var mongo = require("mongodb").MongoClient

var url = "mongodb://localhost:27017/" + process.argv[2];
var colle = process.argv[3];
var idToRm = process.argv[4];

console.log(url, colle, idToRm);

mongo.connect(url, function (err, db){
  var coll = db.collection(colle);
  coll.remove({
    _id: idToRm
  }, function (err) {
    if (err) { throw err; }
    db.close();
  });
})
