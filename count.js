const mongo = require('mongodb').MongoClient;

mongo.connect(`mongodb://localhost:27017/learnyoumongo`, (err, db) => {
    if (err) {
        console.log(err);
        return;
    }
    countData({
        db: db,
        ageLine: process.argv[2]
    });
});

function countData(param) {
    const db = param.db;
    const ageLine = param.ageLine;

    const query = { age: { $gt: parseInt(ageLine) } };

    db.collection('parrots').count(query, (err, count) => {
        if (err) {
            console.log(err);
        } else {
            console.log(count);
        }
        db.close();
    });
}
