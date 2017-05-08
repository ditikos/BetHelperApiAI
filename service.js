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

app.post('/webhook', (req, res) => {
    //console.log(req.body);
    var action = req.body.result.action;
    console.log(`Parameters from intent: ${JSON.stringify(req.body.result.parameters, undefined, 2)}`);
    switch (action) {
        case "postBetPlace":
            console.log('Place a bet');
            
        break;
        case "getBetInfo":
            console.log('Get some info about a bet');
        break;
        default:
            console.log("This is the default one.");
    }
    res.status(500).send();
});

app.listen(8000, () => {
    console.log('Service started at 8000');
});
