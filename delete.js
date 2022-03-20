const mongo = require('mongodb').MongoClient;

mongo.connect(`mongodb://localhost:27017/${process.argv[2]}`, (err, db) => {
    if (err) {
        console.log(err);
        return;
    }
    removeData({
        db: db,
        collection: process.argv[3],
        idToRemove: process.argv[4]
    });
});

function removeData(param) {
    const db = param.db;
    const collection = param.collection;
    const idToRemove = param.idToRemove;

    const query = { _id: idToRemove };

    db.collection(collection)
        .remove(query, (err, result) => {
            if (err) console.log(err);
            db.close();
        });
}
