var mongo = require("mongodb").MongoClient

var url = "mongodb://localhost:27017/" + process.argv[2];


mongo.connect(url, function (err, db){
  var users = db.collection('users');
  users.update({
    name: 'Tina'
  }, {
    $set: {
      age: 40
    }
  }, function (err){
    if(err) {
      throw err;
    }
    db.close();
  })
)
