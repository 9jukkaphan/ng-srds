import { Component, OnInit,Input } from '@angular/core';
import { Author } from '../author.model';
import { AuthorService } from '../author.service';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
	selector: 'all-authors',
	templateUrl: './all-authors.component.html',
	styleUrls: ['./all-authors.component.css'],
	providers:[AuthorService]
})

export class AllAuthorsComponent implements OnInit {

	authors:Author[];
	query:string = "as";

	@Input() 
	get counter(){

		return this.query; 
	}
	
	constructor(private authorService: AuthorService) {
		this.getAuthors();
	}

	addNewAuthor(fName:string,lName:string,affiliation:string,email:string,phone:string){
		let authorObj:Author = new Author();
		authorObj.firstName = fName;
		authorObj.lastName = lName;
		authorObj.affiliation = affiliation;
		authorObj.email = email;
		authorObj.phone = phone;
		console.log("AllAuthorsComponent.addNewAuthor:Set Author" + authorObj);
		this.authorService.createAuthor(authorObj);
	}

	deleteAuthor(id:string){
		if (id!=undefined) {
			this.authorService.deleteAuthor(id);
		}		
	}

	searchAuthor(query:string){
		this.query = query;
		console.log("Search Authors Method: Query is" + query);
	}

	getAuthors(){
		this.authorService.getAuthors()
		.subscribe((data) => this.authors = data,
			(error) => alert(error),
			() => console.log("success"))
	}

	ngOnInit() {
	}

}
