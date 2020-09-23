import { Component, OnInit } from '@angular/core';
import BlogPost from 'src/app/models/blogpost';
import { BlogService } from 'src/app/blog.service';

@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

	blogposts: BlogPost[] = [];

	constructor(private blogService: BlogService) { }

	ngOnInit() {
		analytics.page("BLOG");

		this.blogService.getBlogPosts()
			.subscribe((blogposts: BlogPost[]) => {
				console.log("blogservice: ", blogposts);
				this.blogposts = blogposts;
			});
	}

}
