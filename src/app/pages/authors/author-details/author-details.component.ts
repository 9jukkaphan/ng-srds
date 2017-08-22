import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorService } from '../author.service'; 
import { Author } from '../author.model';

@Component({
	selector: 'author-details',
	templateUrl: './author-details.component.html',
	styleUrls: ['./author-details.component.css'],
	providers:[AuthorService]
})
export class AuthorDetailsComponent implements OnInit {

	id:number;
	private sub: any;
	author:Author;
	constructor(
		private route: ActivatedRoute,
		private authorService:AuthorService
		) { 
		this.getParametter();
		this.getAuthor(this.id);
	}

	ngOnInit() {
		
	}

	getParametter(){
		this.sub = this.route.params.subscribe(params => {
			this.id = +params['id']; // (+) converts string 'id' to a number
			// In a real app: dispatch action to load the details here.
		});
	}

	getAuthor(id:number){
		let idString = id+"";
		this.authorService.getAuthor(idString)
		.subscribe((data) => this.author = data,
			(error) => alert(error),
			() => console.log("AuthorDetailsComponent" ));
		console.log(this.author);
	}

	updateProfile(id:number,firstName:string,lastName:string,affiliation,email:string,phone:string){
		let authorObj:Author = new Author();
		authorObj.firstName = firstName;
		authorObj.lastName = lastName;
		authorObj.affiliation = affiliation;
		authorObj.email = email;
		authorObj.phone = phone;
		this.authorService.updateAuthor(id,authorObj);
		console.log("AuthorDetailsComponent.updateProfile");
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

}
