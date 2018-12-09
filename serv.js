const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const path = require('path');
const port = 3000;

let fakeDB = [];

app.use(bodyParser.json());

// For serving actual site and css
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));
app.get('/css/pps.css', (req, res) => res.sendFile(path.join(__dirname + "/" + "css/pps.css")));
app.get('/images/pupperlakec.png', (req,res) => res.sendFile(path.join(__dirname + "/" + "images/pupperlakec.png")))

// Getting and Posting data from DB
app.post('/api/users', (req, res) => {
	fakeDB.push(req.body);
	console.log(fakeDB);
	res.send("user created")
})
app.get('/api/users', (req, res) => {
	res.json(fakeDB)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

