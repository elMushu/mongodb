const mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {
    if (err) {
        console.log(err);
        return;
    }
    insertData(db, process.argv[2], process.argv[3]);

});

function insertData(db, firstName, lastName) {
    const dataToInsert = {
        firstName: firstName,
        lastName: lastName
    };

    db.collection('learnyoumongo')
        .insert(dataToInsert, function (err, insertionInfo) {
            if (err) {
                throw err;
            } else {
                console.log(JSON.stringify(dataToInsert));
            }
            db.close();
        });
}
