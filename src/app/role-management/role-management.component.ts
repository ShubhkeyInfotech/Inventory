import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.css']
})
export class RoleManagementComponent {
  items: any;
  home: any;
  users: any;
  cols: any;
  search:any;
  filter=false;
  selectedRoles:any
  _selectedColumns: any[] | undefined;
  sizes:any='';
  selectedSize:any
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
  company=[
    {"name":"ABC"},
    {"name":"XYZ"},
    {"name":"123"},
  ]
    constructor(private router : Router){}
  ngOnInit() {
    this.sizes=[
      {name:'Compact View' , "class":'p-datatable-sm'},
      {name:'Normal View' , "class":''},
      {name:'Tall View' , "class":'p-datatable-lg'}
    ]
    this.items = [{ label: 'Role Management' }];
    this.home = { icon: 'pi pi-user', routerLink: '/' };
    this.users = [
      {"rolename":"Admin","description":"System administrator","Status":"🟢Active","roletype":"Corporate"},
      {"rolename":"Billing","description":"Billing specialist","Status":"🟡Pending","roletype":"Customer Service"},
      {"rolename":"CC User","description":"Contact center user","Status":"🟢Active","roletype":"Customer Service"},
      {"rolename":"User","description":"Regular user","Status":"🔴Inactive","roletype":"FedEx Customer"},
      {"rolename":"CSR User","description":"Customer service representative","Status":"🟡Pending","roletype":"Customer Service"},
      {"rolename":"Driver","description":"Delivery driver","Status":"🟢Active","roletype":"Operations"},
      {"rolename":"Admin","description":"System administrator","Status":"🟡Pending","roletype":"Corporate"},
      {"rolename":"Billing","description":"Billing specialist","Status":"🔴Inactive","roletype":"Customer Service"},
      {"rolename":"CC User","description":"Contact center user","Status":"🔴Inactive","roletype":"Customer Service"},
      {"rolename":"User","description":"Regular user","Status":"🟢Active","roletype":"FedEx Customer"},
      {"rolename":"CSR User","description":"Customer service representative","Status":"🟢Active","roletype":"Customer Service"},
      {"rolename":"Driver","description":"Delivery driver","Status":"🟡Pending","roletype":"Operations"},
      {"rolename":"Admin","description":"System administrator","Status":"🔴Inactive","roletype":"Corporate"},
      {"rolename":"Billing","description":"Billing specialist","Status":"🟢Active","roletype":"Customer Service"},
      {"rolename":"CC User","description":"Contact center user","Status":"🔴Inactive","roletype":"Customer Service"},
      {"rolename":"User","description":"Regular user","Status":"🟡Pending","roletype":"FedEx Customer"},
      {"rolename":"CSR User","description":"Customer service representative","Status":"🔴Inactive","roletype":"Customer Service"},
      {"rolename":"Driver","description":"Delivery driver","Status":"🟡Pending","roletype":"Operations"},
      {"rolename":"Admin","description":"System administrator","Status":"🟢Active","roletype":"Corporate"},
      {"rolename":"Billing","description":"Billing specialist","Status":"🟡Pending","roletype":"Customer Service"},
      {"rolename":"CC User","description":"Contact center user","Status":"🔴Inactive","roletype":"Customer Service"},
      {"rolename":"User","description":"Regular user","Status":"🟢Active","roletype":"FedEx Customer"},
      {"rolename":"CSR User","description":"Customer service representative","Status":"🟢Active","roletype":"Customer Service"},
      {"rolename":"Driver","description":"Delivery driver","Status":"🔴Inactive","roletype":"Operations"},
      {"rolename":"Admin","description":"System administrator","Status":"🔴Inactive","roletype":"Corporate"},
      {"rolename":"Billing","description":"Billing specialist","Status":"🟡Pending","roletype":"Customer Service"},
      {"rolename":"CC User","description":"Contact center user","Status":"🟢Active","roletype":"Customer Service"},
      {"rolename":"User","description":"Regular user","Status":"🟡Pending","roletype":"FedEx Customer"},
      {"rolename":"Customer Service Rep","description":"Customer service representative","Status":"🟢Active","roletype":"Customer Service"},
      {"rolename":"Delivery Driver","description":"Delivery driver","Status":"🟡Pending","roletype":"Operations"},
      {"rolename":"Administrator","description":"System administrator","Status":"🔴Inactive","roletype":"Corporate"},
      {"rolename":"Billing Specialist","description":"Billing specialist","Status":"🟡Pending","roletype":"Customer Service"},
      {"rolename":"Contact Center User","description":"Contact center user","Status":"🟢Active","roletype":"Customer Service"},
      {"rolename":"Regular User","description":"Regular user","Status":"🟡Pending","roletype":"FedEx Customer"},
      {"rolename":"CSR","description":"Customer service representative","Status":"🔴Inactive","roletype":"Customer Service"},
      {"rolename":"Delivery Personnel","description":"Delivery personnel","Status":"🔴Inactive","roletype":"Operations"},
      {"rolename":"Sys Admin","description":"System administrator","Status":"🟢Active","roletype":"Corporate"},
      {"rolename":"Billing Admin","description":"Billing administrator","Status":"🟡Pending","roletype":"Customer Service"},
      {"rolename":"Contact Center Agent","description":"Contact center agent","Status":"🟢Active","roletype":"Customer Service"},
      {"rolename":"Customer","description":"Regular customer","Status":"🔴Inactive","roletype":"FedEx Customer"},
      {"rolename":"Customer Care Rep","description":"Customer care representative","Status":"🟡Pending","roletype":"Customer Service"},
      {"rolename":"Driver Helper","description":"Driver helper","Status":"🔴Inactive","roletype":"Operations"},
      {"rolename":"System Administrator","description":"System administrator","Status":"🟡Pending","roletype":"Corporate"},
      {"rolename":"Billing Clerk","description":"Billing clerk","Status":"🟢Active","roletype":"Customer Service"},
      {"rolename":"CC Representative","description":"Contact center representative","Status":"🟡Pending","roletype":"Customer Service"},
      {"rolename":"User Account","description":"User account","Status":"🔴Inactive","roletype":"FedEx Customer"},
      {"rolename":"Customer Service Agent","description":"Customer service agent","Status":"🟢Active","roletype":"Customer Service"},
      {"rolename":"Delivery Team Member","description":"Delivery team member","Status":"🟡Pending","roletype":"Operations"},
      {"rolename":"Administrator Account","description":"Administrator account","Status":"🔴Inactive","roletype":"Corporate"},
      {"rolename":"Billing Coordinator","description":"Billing coordinator","Status":"🟢Active","roletype":"Customer Service"},
      {"rolename":"Contact Center Specialist","description":"Contact center specialist","Status":"🔴Inactive","roletype":"Customer Service"},
      {"rolename":"FedEx Customer","description":"FedEx customer","Status":"🟢Active","roletype":"FedEx Customer"},
      {"rolename":"Customer Care Specialist","description":"Customer care specialist","Status":"🔴Inactive","roletype":"Customer Service"},
      {"rolename":"Delivery Manager","description":"Delivery manager","Status":"🔴Inactive","roletype":"Operations"},
      {"rolename":"Corporate Admin","description":"Corporate administrator","Status":"🟡Pending","roletype":"Corporate"},
      {"rolename":"User Account Manager","description":"User account manager","Status":"🟢Active","roletype":"FedEx Customer"},
      {"rolename":"Customer Service Supervisor","description":"Customer service supervisor","Status":"🟡Pending","roletype":"Customer Service"},
      {"rolename":"Delivery Operations Manager","description":"Delivery operations manager","Status":"🔴Inactive","roletype":"Operations"},
      {"rolename":"Corporate Administrator","description":"Corporate administrator","Status":"🟢Active","roletype":"Corporate"},
      {"rolename":"Billing Analyst","description":"Billing analyst","Status":"🔴Inactive","roletype":"Customer Service"},
      {"rolename":"Contact Center Manager","description":"Contact center manager","Status":"🟡Pending","roletype":"Customer Service"},
      {"rolename":"Regular Customer","description":"Regular customer","Status":"🔴Inactive","roletype":"FedEx Customer"},
      {"rolename":"Customer Care Manager","description":"Customer care manager","Status":"🟢Active","roletype":"Customer Service"},
      {"rolename":"Delivery Operations Supervisor","description":"Delivery operations supervisor","Status":"🟡Pending","roletype":"Operations"},
      {"rolename":"Corporate User","description":"Corporate user","Status":"🔴Inactive","roletype":"Corporate"},
      {"rolename":"Billing Manager","description":"Billing manager","Status":"🟢Active","roletype":"Customer Service"},
      {"rolename":"CC Supervisor","description":"Contact center supervisor","Status":"🔴Inactive","roletype":"Customer Service"},
      {"rolename":"Regular Account","description":"Regular account","Status":"🟡Pending","roletype":"FedEx Customer"},
      {"rolename":"Customer Care Coordinator","description":"Customer care coordinator","Status":"🔴Inactive","roletype":"Customer Service"},
      {"rolename":"Delivery Operations Coordinator","description":"Delivery operations coordinator","Status":"🟢Active","roletype":"Operations"},
      {"rolename":"Corporate Manager","description":"Corporate manager","Status":"🟡Pending","roletype":"Corporate"},
      {"rolename":"Billing Supervisor","description":"Billing supervisor","Status":"🔴Inactive","roletype":"Customer Service"},
      {"rolename":"CC Manager","description":"Contact center manager","Status":"🟢Active","roletype":"Customer Service"},
      {"rolename":"Regular User Account","description":"Regular user account","Status":"🔴Inactive","roletype":"FedEx Customer"},
      {"rolename":"Customer Care Administrator","description":"Customer care administrator","Status":"🟡Pending","roletype":"Customer Service"},
      {"rolename":"Delivery Operations Administrator","description":"Delivery operations administrator","Status":"🔴Inactive","roletype":"Operations"},
      {"rolename":"Corporate Supervisor","description":"Corporate supervisor","Status":"🟢Active","roletype":"Corporate"},
      {"rolename":"Billing Specialist Manager","description":"Billing specialist manager","Status":"🟡Pending","roletype":"Customer Service"},
      {"rolename":"CC Director","description":"Contact center director","Status":"🔴Inactive","roletype":"Customer Service"},
      {"rolename":"FedEx Customer Account Manager","description":"FedEx customer account manager","Status":"🟢Active","roletype":"FedEx Customer"},
      {"rolename":"Customer Care Supervisor","description":"Customer care supervisor","Status":"🟡Pending","roletype":"Customer Service"},
    ]    

    this.cols = [
      { field: "rolename", header: "Role Name" },
      { field: "description", header: "Description" },
      { field: "Status", header: "Status" },
      { field: "roletype", header: "Role Type" },
    ];

    this._selectedColumns = this.cols;
  }

  @Input() get selectedColumns(): any {
    return this._selectedColumns;
  }

  set selectedColumns(val: any[]) {
    this._selectedColumns =
      this.cols.filter((col: any) => val.includes(col));
  }
  f1(){
if(this.selectedRoles.name=='Customer'||this.selectedRoles.name=='FedEx'||this.selectedRoles.name=='Agent'){
  this.router.navigate(['/add-user'])
}
  }
}

export interface Tutorials {
  title: string;
  category: string;
  rating?: number;
}
