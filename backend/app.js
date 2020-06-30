const express = require('express');
const app = express();
const mongoose = require('./database/mongoose');

const BlogPost = require('./database/models/blogpost');
// const List = require('./database/models/list');
// const Task = require('./database/models/task');

app.use(express.json()); // json parser must stay on top

/*
CORS - Cross Origin Request Security
localhost:8080 - frontend
localhost:8081 - backend api (must reject any request from any other port besides 8080)
*/
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
	// res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Headers", "*");
	next();
});


/*
Routes (URL endpoints) using RESTful patterns
List: Create, Update, ReadOne, ReadAll, Delete
Task: Create, Update, ReadOne, ReadAll, Delete
*/
app.get('/', (req, res) => {
	res.send("root!");
});

app.get('/blogposts/new', (req, res) => {
	(new BlogPost({
		'title': "Calvin and Hobbes3",
		'authorId': "b1llw@terson",
		'authorName': "Bill Waterson",
		'published': true,
		'body': "<p>Ten million bottles of beer on the wall, ten million bottles of beer!</p>"
	}))
	.save()
	.then((blogpost) => res.send(blogpost))
	.catch((error) => console.log(error));
});

app.get('/blogposts', (req, res) => {
	BlogPost.find({})
		.then(blogposts => res.send(blogposts))
		.catch((error) => console.log(error));
});

app.get('/blogposts/:blogpostId', (req, res) => {
	BlogPost.find({ _id: req.params.blogpostId })
		.then(blogpost => res.send(blogpost))
		.catch((error) => console.log(error));
});

app.post('/blogposts', (req, res) => {
	(new BlogPost({
		'title': req.body.title,
		'authorId': req.body.authorId,
		'authorName': req.body.authorName,
		'published': true,
		'body': req.body.body
	}))
	.save()
	.then((blogpost) => res.send(blogpost))
	.catch((error) => console.log(error));
});

// app.patch('/blogposts/:blogpostId', (req, res) => {
// 	BlogPost.findOneAndUpdate({ '_id': req.params.blogpostId },
// 		{

// 		})
// });

app.delete('/blogposts/:blogpostId', (req, res) => {
	BlogPost.findByIdAndDelete(req.params.blogpostId)
		.then(blogpost => res.send(blogpost))
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
