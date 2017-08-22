import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AllAuthorsComponent } from './all-authors.component';


const routes: Routes = [{
	path: '',
	data: {
      title: 'All Authors',
      urls: [{title: 'Dashboard',url: '/'},{title: 'All Authors page'}]
    },
	component: AllAuthorsComponent
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule, 
      NgbModule.forRoot(),
    	RouterModule.forChild(routes)
    ],
	declarations: [AllAuthorsComponent]
})
export default class AllAuthorsModule { }