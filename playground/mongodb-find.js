// import mongodb
const config = require('../config');
const {MongoClient} = require('mongodb');

let login_cred = "";
if (config.mongodb.user_auth) {
    login_cred = `${config.mongodb.username}:${config.mongodb.password}@`
}
let mongo_url = `mongodb://${login_cred}${config.mongodb.url}:${config.mongodb.port}/${config.mongodb.db_name}`;

MongoClient.connect(mongo_url, (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server.');
    }
    console.log('Connected to MongoDB Server.');

    db.collection('Bets').find().toArray().then((docs) => {
        console.log(`Using reduce/filter functional`);
        console.log('BetTypes');
        console.log(JSON.stringify(docs, undefined, 2));
        let querySelns = 4;
        var filtered = docs.filter((doc) => doc.number_of_selections >= querySelns);
        console.log(`*** Filtered Docs! ***`)
        console.log(JSON.stringify(filtered, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch Bets ', err);
    });


    db.collection('Bets').find({ number_of_selections: { $gt: 3}}).toArray().then((docs) => {
        console.log(`Using $gt from mongodb`);
        console.log('BetTypes');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch Bets ', err);
    });
    

    db.close();
});