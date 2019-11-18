'use strict';

//////////////////////////////////////////////////
// Configs
//////////////////////////////////////////////////
require('dotenv').config();

////////////////////////////////////////////////
// Dependencies
////////////////////////////////////////////////
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const handlers = require('./js/handlers.js');


////////////////////////////////////////////////
// Application Configuration
////////////////////////////////////////////////
const app = express();
app.use(bodyParser());
app.use(cors());
const PORT = process.env.PORT || 3000;


////////////////////////////////////////////////
// Routes
////////////////////////////////////////////////
app.use( express.static( './public' ));
app.set('view engine', 'ejs');

app.get('/', handlers.renderHome);
app.get('/search', handlers.searchSymbol);



////////////////////////////////////////////////
// Initiation
////////////////////////////////////////////////
app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
