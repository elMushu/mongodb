const mongo = require('mongodb').MongoClient;

mongo.connect(`mongodb://localhost:27017/learnyoumongo`, (err, db) => {
    if (err) {
        console.log(err);
        return;
    }
    aggData({
        db: db,
        size: process.argv[2]
    });
});

function aggData(param) {
    const filter = { $match: { size: param.size } };
    const reducer = {
        $group: {
            _id: 'reduce_sum_price',
            averagePrice: {
                $avg: '$price'
            }
        }
    };
    const query = [filter, reducer];

    param.db.collection('prices').aggregate(query, (err, result) => {
        const averagePrice = result[0].averagePrice;
        console.log(averagePrice.toFixed(2));
        param.db.close();
    });
}
