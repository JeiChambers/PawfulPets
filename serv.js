const express = require('express');


const app = express();
const bodyParser = require('body-parser')
const path = require('path');
const port = 3000;


app.use(bodyParser.json());

// For serving actual site and css
app.get('/', (req, res, next ) => res.sendFile(path.join(__dirname + '/' + 'views/index.html')));
app.get('/css/pps.css', (req, res) => res.sendFile(path.join(__dirname + '/' + "css/pps.css")));
app.get('/images/pupperlakec.png', (req,res) => res.sendFile(path.join(__dirname + "/" + "images/pupperlakec.png")))
app.get('/getstarted', (req, res) => res.sendFile(path.join(__dirname + '/' + 'views/getstarted.html')));
app.get('/css/gsp.css', (req, res) => res.sendFile(path.join(__dirname + '/' + 'css/gsp.css')));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname + '/' + 'views/about.html')));
app.get('/css/abt.css', (req, res) => res.sendFile(path.join(__dirname + '/' + 'css/abt.css')));
app.get('/images/roscoprollins3.png', (req,res) => res.sendFile(path.join(__dirname + "/" + "images/roscoprollins3.png")))
app.get('/escapees', (req, res) => res.sendFile(path.join(__dirname + '/' + 'views/escapees.html')));
app.get('/css/esc.css', (req, res) => res.sendFile(path.join(__dirname +'/' + 'css/esc.css')));
app.get('/images/chameleon.jpg', (req,res) => res.sendFile(path.join(__dirname + '/' + "images/chameleon.jpg")))
app.get('/images/stowaway.jpg', (req,res) => res.sendFile(path.join(__dirname + '/' + "images/stowaway.jpg")))
app.get('/images/stowaway2.jpg', (req,res) => res.sendFile(path.join(__dirname + '/' + "images/stowaway2.jpg")))
app.get('/images/professor.jpg', (req,res) => res.sendFile(path.join(__dirname + '/' + "images/professor.jpg")))
app.get('/images/veteran.jpg', (req,res) => res.sendFile(path.join(__dirname + '/' + "images/veteran.jpg")))
app.get('/images/bully.jpg', (req,res) => res.sendFile(path.join(__dirname + '/' + "images/bully.jpg")))
app.get('/images/hops.jpg', (req,res) => res.sendFile(path.join(__dirname + '/' + "images/hops.jpg")))
app.get('/images/hitchhiker.png', (req,res) => res.sendFile(path.join(__dirname + '/' + "images/hitchhiker.png")))

app.listen(port, () => console.log(`Pawful Petsitting listening on port ${port}!`));

