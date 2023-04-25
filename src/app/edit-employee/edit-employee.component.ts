import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
  providers:[MessageService]
})
export class EditEmployeeComponent {
  users=[
    "Station Manager","Employee"
  ]
  roles=[
   {name:'Admin'},
   {name:'User'},
   {name:'Logistics'},
   {name:'FSL'}
  ]
  items: any;
  home: { icon: string; routerLink: string; };
mnx=[
  {"name":"Chicago"},
  {"name":"Los Angelese"},
  {"name":"Ottawa"}
]
department=[
  {"name":"Inventoey"},
  {"name":"Office"},
  {"name":"Delivery"},
]
title=[
  {"name":"Manager"},
  {"name":"Partner"},
  {"name":"Agent"},
]
    constructor(private messageService: MessageService , private router : Router) {
      this.items = [{ label: 'User Management' ,routerLink:'/user-management'},{ label: 'Edit Employee'  }];
      this.home = { icon: 'pi pi-user', routerLink: '/' };
    }


      update(){
      this.messageService.add({ severity: 'success', summary: 'Form Saved', detail: 'Form Saved Successfully' });
      setTimeout(() => {
        this.router.navigate(['user-management'])
      }, 1500);
    }
}
