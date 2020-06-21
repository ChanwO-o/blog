// import { Comment } from "./Comment";

export default class BlogPost {
	_id: string;
	title: string;
	authorId: string;
	authorName: string;
	timestamp: Date;
	tags: [string];
	published: boolean;
	body: string;
	upvotes: [string];
	downvotes: [string];
	// comments: [Comment];
}