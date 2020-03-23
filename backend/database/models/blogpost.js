const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
	author: {
		type: String,
		trim: true,
		default: 'Anonymous'
	},
	timestamp: {
		type: Date,
		default: Date.now
	},
	comment: {
		type: String,
		default: 'Empty comment'
	}
});

const BlogPostSchema = new mongoose.Schema({
	title: {
		type: String,
		trim: true,
		default: 'Title'
	},
	author: {
		type: String,
		trim: true,
		default: 'Anonymous'
	},
	timestamp: {
		type: Date,
		default: Date.now
	},
	tags: {
		type: [String],
		default: []
	},
	published: { // hide post if not published
		type: Boolean,
		default: true
	},
	body: {
		type: String, // html string
		default: '<p>blog post body</p>'
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
		type: [CommentSchema],
		default: []
	}
});

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

module.exports = BlogPost;