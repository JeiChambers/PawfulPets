const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const path = require('path');
const port = 3000;

let fakeDB = [];

app.use(bodyParser.json());
app.get('/home', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));
app.post('/api/users', (req, res) => {
	fakeDB.push(req.body);
	console.log(fakeDB);
	res.send("user created")
})
app.get('/api/users', (req, res) => {
	res.json(fakeDB)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));