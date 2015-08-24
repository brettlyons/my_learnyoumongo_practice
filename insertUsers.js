var mongo = require("mongodb").MongoClient

var url = "mongodb://localhost:27017/learnyoumongo";

mongo.connect(url, function (err, db){
  var users = db.collection('users');
  var docToInsert = { firstName: String(process.argv[2])
    , lastName: String(process.argv[3]) };
  users.insert(docToInsert);
  console.log(JSON.stringify(docToInsert));
  db.close();
})
