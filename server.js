'use strict';

const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', function(req, res) {
  res.send('Server running on port: ' + PORT + '\n');
});

app.listen(PORT);
