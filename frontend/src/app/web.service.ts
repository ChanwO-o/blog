/**
 * The web service is used for any task that requires making requests to the database that runs locally on the server (hence, the url is localhost)
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class WebService {

	readonly ROOT_URL = "http://localhost:8081";

	// use dependency injection to inject the HttpClient to the service
	constructor(private http : HttpClient) {

	}

	get(uri : string) {
		// let url = '${this.ROOT_URL}/${uri}';
		let url = this.ROOT_URL + "/" + uri;
		console.log("web.service get() start, url: ", url);
		// return this.http.get('${this.ROOT_URL}/${uri}');
		return this.http.get(url);
		// return this.http.get('http://localhost:8081/blogposts');
		// return this.http.get('https://localhost:8081');
		// return this.http.get('https://b8a11b365e304820af7ea3311ee711bc.vfs.cloud9.us-east-1.amazonaws.com:8081/blogposts');
	}

	post(uri : string, payload : Object) {
		return this.http.get('${this.ROOT_URL}/${uri}', payload);
	}

	put(uri : string, payload : Object) {
		return this.http.get('${this.ROOT_URL}/${uri}', payload);
	}

	delete(uri : string) {
		return this.http.get('${this.ROOT_URL}/${uri}');
	}
}
