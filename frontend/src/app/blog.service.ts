import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
	providedIn: 'root'
})
export class BlogService {

	constructor(private webService: WebService) { }

	getBlogPosts() {
		console.log("blog.service getBlogPosts() start");
		let blogposts = this.webService.get('blogposts');
		console.log("web.service get() completed, blogposts: ", blogposts);
		return blogposts;
	}

	// createBlogPost() {
	// 	return this.webService.get('blogposts');
	// }
}
