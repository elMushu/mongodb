const mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {
    if (err) {
        console.log(err);
        return;
    }
    findData(db, process.argv[2]);
});

function findData(db, age) {
    db.collection('parrots')
        .find({ age: { $gt: parseInt(age) } })
        .toArray(function (err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
            }
            db.close();
        });
}
