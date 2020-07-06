const mongoose = require('mongoose');

mongoose.Promise = global.Promise; // handle asynchronous code

mongoose.connect('mongodb://database:27017/blog', // 'database': name of mongodb docker container
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false
	})
	.then(() => console.log("Database connected"))
	.catch((error) => console.log(error));

module.exports = mongoose;