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

    db.collection('Bets').insertOne({
        title: 'Single',
        description: 'A Single is a bet on 1 selection in 1 event. If your selection wins, so do you.',
        number_of_selections: 1,
        bet_type_1: ['WIN', 'PLACE'],
        bet_type_2: 'SINGLE'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert Bet Info: ', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

/*
    db.collection('Bets').insertOne({
        title: 'Double',
        description: 'A Double is 1 bet made up of 2 selections in different events. Both selections must be successful for your bet to win.',
        number_of_selections: 2,
        bet_type_1: ['WIN', 'PLACE'],
        bet_type_2: 'DOUBLE'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert Bet Info: ', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.collection('Bets').insertOne({
        title: 'Treble',
        description: 'A Treble is 1 bet involving 3 selections in different events. All 3 selections have to win for your bet to win.',
        number_of_selections: 3,
        bet_type_1: ['WIN', 'PLACE'],
        bet_type_2: 'TREBLE'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert Bet Info: ', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.collection('Bets').insertOne({
        title: '4-Fold Accumulator',
        description: 'A 4-Fold Accumulator is 1 bet made up of 4 selections in different events. If they all win, so do you. But if any of the selections lose, your bet does too.',
        number_of_selections: 4,
        bet_type_1: ['WIN', 'PLACE'],
        bet_type_2: '4FOLDACC'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert Bet Info: ', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
*/


    db.close();
});