const mongo = require('mongodb').MongoClient;

const dbName = process.argv[2];

mongo.connect(`mongodb://localhost:27017/${dbName}`, (err, db) => {
    if (err) {
        console.log(err);
        return;
    }
    updateData(db);
});

function updateData(db) {
    const key = { username: 'tinatime' };
    const updateExpression = { $set: { age: 40 } };

    db.collection('users')
        .update(key, updateExpression, (err, result) => {
            if (err) {
                console.log(err);
            }
            db.close();
        });
}
