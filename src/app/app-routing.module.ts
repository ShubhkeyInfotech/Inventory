import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'edit-employee',loadChildren:()=>import('./edit-employee/edit-employee.module').then(m=>m.EditEmployeeModule)},
  {path:'airport-search',loadChildren:()=>import('./airports/airports.module').then(m=>m.AirportsModule)},
  {path:'user-management',loadChildren:()=>import('./user-management/user-management.module').then(m=>m.UserManagementModule)},
  {path:'add-user',loadChildren:()=>import('./add-user/add-user.module').then(m=>m.AddUserModule)},
  {path:'role-management',loadChildren:()=>import('./role-management/role-management.module').then(m=>m.RoleManagementModule)},
  {path:'create-role',loadChildren:()=>import('./create-role/create-role.module').then(m=>m.CreateRoleModule)},
  {path:'user-group',loadChildren:()=>import('./user-group/user-group.module').then(m=>m.UserGroupModule)},
  {path:'create-user-group',loadChildren:()=>import('./create-user-group/create-user-group.module').then(m=>m.CreateUserGroupModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
