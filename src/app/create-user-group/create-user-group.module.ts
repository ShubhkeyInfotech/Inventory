import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserGroupComponent } from './create-user-group.component';


const routes : Routes=[{
  path:'',component:CreateUserGroupComponent
}]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CreateUserGroupModule { }
