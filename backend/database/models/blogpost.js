const mongoose = require('mongoose');
const BlogPostSchema = new mongoose.Schema({
	title: {
		type: String,
		trim: true,
		default: 'Title'
	},
	author: {
		type: String,
		trim: true,
		default: 'No author'
	},
	timestamp: {
		type: Date,
		default: Date.now
	},
	published: { // hide post if not published
		type: Boolean,
		default: true
	},
	body: {
		type: String // html string
	},
	upvotes: {
		type: Number,
		default: 0
	},
	downvotes: {
		type: Number,
		default: 0
	},
	comments: {
		type: Array,
		default: []
	}
});
const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

module.exports = BlogPost;