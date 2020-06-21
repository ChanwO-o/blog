/**
 * The web service is used for any task that requires making requests to the database that runs locally on the server (hence, the url is localhost)
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class WebService {

	readonly ROOT_URL;

	// use dependency injection to inject the HttpClient to the service
	constructor(private http : HttpClient) {
		// this.ROOT_URL = url;
		this.ROOT_URL = "http://localhost:8081";
	}

	get(uri : string) {
		return this.http.get('${this.ROOT_URL}/${uri}');
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
