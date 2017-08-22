import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AuthorDetailsComponent } from './author-details.component';


const routes: Routes = [{
	path: '',
	data: {
      title: 'Authors Detail',
      urls: [{title: 'Dashboard',url: '/'},{title: 'Author Details page'}]
    },
	component: AuthorDetailsComponent
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule, 
      NgbModule.forRoot(),
    	RouterModule.forChild(routes)
    ],
	declarations: [AuthorDetailsComponent]
})
export default class AuthorDetailsModule { }