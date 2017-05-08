
const config   = require('./config');
const mongoose = require('mongoose');

let login_cred = "";
if (config.mongodb.user_auth) {
    login_cred = `${config.mongodb.username}:${config.mongodb.password}@`
}
let mongo_url = `mongodb://${login_cred}${config.mongodb.url}:${config.mongodb.port}/${config.mongodb.db_name}`;

// connect with mongoose
mongoose.Promise = global.Promise;
mongoose.connect(mongo_url);

// create a model
var BetInfo = mongoose.model('BetInfo', {
    title: {
        type: String
    },
    description: {
        type: String
    },
    number_of_selections: {
        type: Number
    },
    bet_type_1: {
        type: Array
    },
    bet_type_2: {
        type: String
    }
});

