var mongo = require("mongodb").MongoClient

var mongoURL = "mongodb://localhost:27017/learnyoumongo";
//console.log(process.argv[2])

mongo.connect("mongodb://localhost:27017/learnyoumongo", function (err, db){
  var sizeFilter = process.argv[2];
  var currCollection = db.collection('prices');
  var match = { $match: { size: sizeFilter } };
  currCollection.aggregate([
      { $match: {size: sizeFilter} }
      , { $group: { _id: "Total Prices", price: { $avg: '$price' } } }
  ]).toArray(function (err, results) {
    if(err) throw err;
    console.log(results[0].price.toFixed(2));
    db.close();
  })
})
