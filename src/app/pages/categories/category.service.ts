import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { Category } from './category.model';

@Injectable()
export class CategoryService {

	constructor(private http: Http) { }

	createCategory(category:Category){
		this.http.post('http://localhost:3000/categories',category)
		.subscribe(
			(body) => console.log("POST CATEGORIES:" + body),
			err => console.log("POST CATEGORIES:"+ err)
			);
	}

	deleteCategory(id:string){
		this.http.delete('http://localhost:3000/categories/'+id)
		.subscribe(
			(body) => console.log("Delete AUTHOR:" +body),
			err => console.log("Delete AUTHOR:"+ err)
			);
	}

	getCategories() {
		let authors:any;
		return this.http.get('http://localhost:3000/categories')
		.map(res => res.json());
	}

	getCategory(id:string) {
		return this.http.get('http://localhost:3000/categories/'+id)
		.map(res => res.json());
	}

	private handleError(error: Response){
		console.error(error);
		return Observable.throw(error.json().error || 'Server Error');
	}
}
