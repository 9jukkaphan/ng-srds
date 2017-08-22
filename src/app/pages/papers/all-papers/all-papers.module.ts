import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AllPapersComponent } from './all-papers.component';
const routes: Routes = [{
	path: '',
	data: {
      title: 'All Papers',
      urls: [{title: 'Dashboard',url: '/'},{title: 'All Papers page'}]
    },
	component: AllPapersComponent
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule, 
      NgbModule.forRoot(),
    	RouterModule.forChild(routes)
    ],
	declarations: [AllPapersComponent]
})
export default class AllPapersModule { }