const path = require('path');
const http = require('http');

const server = http.createServer();
const express = require('express');
const bodyParser = require('body-parser')

const app = express();

const indexRoutes = require('./routes/index');
const aboutRoutes = require('./routes/about');
const startedRoutes = require('./routes/getStarted');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/index', indexRoutes);
app.use('/about', aboutRoutes);
app.use('/getStarted', startedRoutes);




app.listen(3000)