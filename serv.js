const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser')
const path = require('path');
const port = 3000;
mongoose.connect('mongodb://localhost/Catabase')

.then(connection => {
	console.log(connection)
})

const catSchema = {
	name: {
		type: String, 
		required: true
	}, 
	age: {
		type: Number,
		required: true
	}
}

const Cat = mongoose.model('Cat', catSchema)

// const myCat = new Cat({name: "Tom", age: 5 })
// myCat.save()
// console.log(myCat)

app.use(bodyParser.json());

// For serving actual site and css
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));
app.get('/css/pps.css', (req, res) => res.sendFile(path.join(__dirname + "/" + "css/pps.css")));
app.get('/images/pupperlakec.png', (req,res) => res.sendFile(path.join(__dirname + "/" + "images/pupperlakec.png")))
app.get('/getstarted', (req, res) => res.sendFile(path.join(__dirname + '/getstarted.html')));
app.get('/css/gsp.css', (req, res) => res.sendFile(path.join(__dirname + '/' + 'css/gsp.css')));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname + '/about.html')));
app.get('/css/abt.css', (req, res) => res.sendFile(path.join(__dirname +'/' + 'css/abt.css')));

// Getting and Posting data from DB
app.post('/api/cats', (req, res) => {
	const maybeNewCat = new Cat(req.body)
	maybeNewCat.save()
		.then(result => {
			res.json(result)
		})
		.catch(err => {
			res.json({msg: err})
		})
})
app.get('/api/cats', (req, res) => {
	Cat.find()
		.then(result =>{
			res.json(result)
		})
		.catch(err => {
			res.json({msg: err})
		})
})

app.get('/api/cats/:name', (req, res) => {
	// Cat.findOne({name: req.params.name})
	// .then(result =>{
	// 	res.json(result)
	// })
	// .catch(err => {
	// 	res.json({msg: err})
	// })

	Cat.findOne({name: req.params.name})
		.then(result =>{
			result ? res.json(result) : res.json({msg: "Sorry, no cat by that name"})			
		})
		.catch(err => {
			res.json({msg: err})
		})	
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

