const express = require('express');
const app = express();
const mongoose = require('./database/mongoose');

const List = require('./database/models/list');
const Task = require('./database/models/task');

app.use(express.json()); // json parser must stay on top

/*
CORS - Cross Origin Request Security
localhost:8080 - frontend
localhost:8081 - backend api (must reject any request from any other port besides 8080)
*/
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});


/*
Routes (URL endpoints) using RESTful patterns
List: Create, Update, ReadOne, ReadAll, Delete
Task: Create, Update, ReadOne, ReadAll, Delete
*/
app.get('/', (req, res) => {
	(new List({ 'title': req.body.title }))
		.save()
		.then((list) => res.send(list))
		.catch((error) => console.log(error));
});

app.get('/lists', (req, res) => {
	List.find({})
		.then(lists => res.send(lists))
		.catch((error) => console.log(error));
});

app.get('/lists/:listId', (req, res) => {
	List.find({ _id: req.params.listId })
		.then(list => res.send(list))
		.catch((error) => console.log(error));
});

app.post('/lists', (req, res) => {
	(new List({ 'title': req.body.title }))
		.save()
		.then((list) => res.send(list))
		.catch((error) => console.log(error));
});

app.patch('/lists/:listId', (req, res) => {
	List.findOneAndUpdate({ '_id': req.params.listId }, { $set: req.body })
		.then(list => res.send(list))
		.catch((error) => console.log(error));
});

app.delete('/lists/:listId', (req, res) => {
	List.findByIdAndDelete(req.params.listId)
		.then(list => res.send(list))
		.catch((error) => console.log(error));
});

var PORT = 8081;
app.listen(PORT, () => console.log("Server is connected on " + PORT));

/*
frontend: (tie to npm start in future)
ng serve --port 8080 --disable-host-check

backend:
nodemon app.js

mongodb:
mongod --bind_ip=$IP --nojournal --repair
*/