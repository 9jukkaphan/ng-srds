import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AllCategoriesComponent } from '../all-categories/all-categories.component';


const routes: Routes = [{
	path: '',
	data: {
      title: 'All Categories',
      urls: [{title: 'Dashboard',url: '/'},{title: 'All Categories page'}]
    },
	component: AllCategoriesComponent
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule, 
      NgbModule.forRoot(),
    	RouterModule.forChild(routes)
    ],
	declarations: [AllCategoriesComponent]
})
export default class AllAuthorsModule { }