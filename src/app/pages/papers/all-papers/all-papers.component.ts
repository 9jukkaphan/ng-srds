import { Component, OnInit } from '@angular/core';
import { Category } from '../../categories/category.model';
import { CategoryService } from '../../categories/category.service';

@Component({
	selector: 'all-papers',
	templateUrl: './all-papers.component.html',
	styleUrls: ['./all-papers.component.css'],
	providers:[CategoryService]
})
export class AllPapersComponent implements OnInit {
	private categories:Category[];
	constructor(private categoryService:CategoryService) {
		this.getCategories();
	}

	ngOnInit() {
	}

	getCategories(){
		this.categoryService.getCategories()
		.subscribe((data) => this.categories = data,
			(error) => alert(error),
			() => console.log("success"))
	}

}
