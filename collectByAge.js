var mongo = require("mongodb").MongoClient

var mongoURL = "mongodb://localhost:27017/learnyoumongo";

mongo.connect("mongodb://localhost:27017/learnyoumongo", function (err, db){
  var thisAge = parseInt(process.argv[2]);
  var currCollection = db.collection('parrots');
  currCollection.count({
    age: { $gt: +thisAge }
  }, function (err, count) {
    if(err) throw err;
    console.log(count);
    db.close();
  })
})
