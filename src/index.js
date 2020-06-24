const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const contact = require('./contact');

const app = express()
    .use(cors())
    .use(bodyParser.json())
    .use(contact());

app.listen(5200, () => {
    console.log('Express server listening on port 5200');
});
