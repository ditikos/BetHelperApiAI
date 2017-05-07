//
//
//
//
//
const config = require('./config');
const express = require('express');
const body_parser = require('body-parser');

const app = express();
app.use(body_parser.json());

console.log(`Defaults: ${JSON.stringify(config, undefined, 2)}`);
let login_cred = "";
if (config.mongodb.user_auth) {
    login_cred = `${config.mongodb.username}:${config.mongodb.password}@`
}
let mongo_url = `mongodb://${login_cred}${config.mongodb.url}:${config.mongodb.port}/${config.mongodb.db_name}`;
console.log(`Connect to mongo_url: ${mongo_url}`);