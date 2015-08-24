var mongo = require("mongodb").MongoClient

var mongoURL = "mongodb://localhost:27017/learnyoumongo";

mongo.connect("mongodb://localhost:27017/learnyoumongo", function (err, db){
  var thisAge = parseInt(process.argv[2]);
  var parrots = db.collection('parrots');
  parrots.find({
    age: { $gt: +thisAge }
  },{ name:1
  , age: 1
  , _id: 0}).toArray(function (err, documents) {
    console.log(documents);
    db.close();
  })
})
