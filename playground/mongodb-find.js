// import mongodb
const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/BetInfoService', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server.');
    }
    console.log('Connected to MongoDB Server.');

    db.collection('Bets').find().toArray().then((docs) => {
        console.log('BetTypes');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch Bets ', err);
    });

    

    db.close();
});