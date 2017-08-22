import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Author } from './author.model';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthorService {

	constructor(private http: Http) { }

	createAuthor(author:Author){
		this.http.post('http://localhost:3000/authors',author)
		.subscribe(
			(body) => console.log("POST AUTHOR:" + body),
			err => console.log("POST AUTHOR:"+ err)
			);
	}

	updateAuthor(id:number,author:Author){
		this.http.put('http://localhost:3000/authors/'+id,author)
		.subscribe(
			(body) => console.log("PUT AUTHOR:" + body),
			err => console.log("PUT AUTHOR:"+ err)
			);
	}

	deleteAuthor(id:string){
		this.http.delete('http://localhost:3000/authors/'+id)
		.subscribe(
			(body) => console.log("Delete AUTHOR:" +body),
			err => console.log("Delete AUTHOR:"+ err)
			);
	}

	getAuthors() {
		let authors:any;
		return this.http.get('http://localhost:3000/authors')
		.map(res => res.json());
	}

	getAuthor(id:string) {
		return this.http.get('http://localhost:3000/authors/'+id)
		.map(res => res.json());
	}

	private handleError(error: Response){
		console.error(error);
		return Observable.throw(error.json().error || 'Server Error');
	}
}
