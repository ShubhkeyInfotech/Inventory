import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserGroupComponent } from './user-group.component';


const routes : Routes = [{
  path:'',component:UserGroupComponent
}]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes )
  ]
})
export class UserGroupModule { }
