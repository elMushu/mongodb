const mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {
    if (err) {
        console.log(err);
        return;
    }
    findData(db, process.argv[2]);
});

function findData(db, age) {
    const condition = { age: { $gt: parseInt(age) } };
    const projector = { name: 1, age: 1, _id: 0 };

    db.collection('parrots')
        .find(condition, projector)
        .toArray(function (err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
            }
            db.close();
        });
}
