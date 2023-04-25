import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AirportsComponent } from './airports/airports.component';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { AccordionModule } from 'primeng/accordion';
import { DividerModule } from 'primeng/divider';
import { ToastModule } from 'primeng/toast';
import { MultiSelectModule } from "primeng/multiselect";
import { UserManagementComponent } from './user-management/user-management.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { AddUserComponent } from './add-user/add-user.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { MenubarModule } from 'primeng/menubar';
import { RoleManagementComponent } from './role-management/role-management.component';
import { CreateRoleComponent } from './create-role/create-role.component';
import { HttpClientModule } from '@angular/common/http';
import { TreeTableModule } from 'primeng/treetable';
import { DialogModule } from 'primeng/dialog';
import { PasswordModule } from 'primeng/password';
import { UserGroupComponent } from './user-group/user-group.component';
import { CreateUserGroupComponent } from './create-user-group/create-user-group.component';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    AirportsComponent,
    EditEmployeeComponent,
    UserManagementComponent,
    AddUserComponent,
    HeaderComponent,
    SidebarComponent,
    RoleManagementComponent,
    CreateRoleComponent,
    UserGroupComponent,
    CreateUserGroupComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TableModule,
    DropdownModule,
    FormsModule,
    ButtonModule,
    AccordionModule,
    DividerModule,
    MultiSelectModule,
    ToastModule,
    SelectButtonModule,
    ConfirmDialogModule,
    BreadcrumbModule,
    TieredMenuModule,
    MenubarModule,
    HttpClientModule,
    TreeTableModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    CalendarModule,
    RadioButtonModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
