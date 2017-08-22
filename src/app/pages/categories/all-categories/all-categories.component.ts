import { Component, Input, Output, EventEmitter,OnInit } from '@angular/core';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
	selector: 'all-categories',
	templateUrl: './all-categories.component.html',
	styleUrls: ['./all-categories.component.css'],
	providers:[CategoryService]
})
export class AllCategoriesComponent implements OnInit {

	
	categories:Category[];
	
	constructor(private categoryService: CategoryService) {
		this.getCategories();
	}

	addNewCategory(nameCategory:string,desCategory:string){
		let categoryObj: Category = new Category();
		categoryObj.name = nameCategory;
		categoryObj.description = desCategory;
		console.log("AllCategoriesComponent.addNewCategory:Set Category Obj:" + categoryObj);
		this.categoryService.createCategory(categoryObj);
	}

	deleteAuthor(id:string){
		if (id!=undefined) {
			this.categoryService.deleteCategory(id);
		}		
	}

	getCategories(){
		this.categoryService.getCategories()
		.subscribe((data) => this.categories = data,
			(error) => alert(error),
			() => console.log("success"))
	}

	ngOnInit() {
	}
}
