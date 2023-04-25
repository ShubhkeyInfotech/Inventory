import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.css']
})
export class UserGroupComponent {
  items: any;
  home: any;
  users: any;
  cols: any;
  search:any;
  selectedRoles:any
  _selectedColumns: any[] | undefined;
  sizes:any='';
  filter=false; 
  selectedSize:any
    constructor(private router : Router){}
  ngOnInit() {
    this.sizes=[
      {name:'Compact View' , "class":'p-datatable-sm'},
      {name:'Normal View' , "class":''},
      {name:'Tall View' , "class":'p-datatable-lg'}
    ]
    this.items = [{ label: 'User Group' }];
    this.home = { icon: 'pi pi-user', routerLink: '/' };
    this.users = [
      {"groupname":"Admin","description":"System administrator","Status":"🟢Active",},
      {"groupname":"Billing","description":"Billing specialist","Status":"🟡Pending"},
      {"groupname":"CC User","description":"Contact center user","Status":"🟢Active"},
      {"groupname":"CSR User","description":"Customer service representative","Status":"🟡Pending"},
      {"groupname":"Driver","description":"Delivery driver","Status":"🟢Active",},
      {"groupname":"Admin","description":"System administrator","Status":"🟡Pending",},
      {"groupname":"Billing","description":"Billing specialist","Status":"🔴Inactive"},
      {"groupname":"CC User","description":"Contact center user","Status":"🔴Inactive"},
      {"groupname":"CSR User","description":"Customer service representative","Status":"🟢Active"},
      {"groupname":"Driver","description":"Delivery driver","Status":"🟡Pending",},
      {"groupname":"Admin","description":"System administrator","Status":"🔴Inactive",},
      {"groupname":"Billing","description":"Billing specialist","Status":"🟢Active"},
      {"groupname":"CC User","description":"Contact center user","Status":"🔴Inactive"},
      {"groupname":"CSR User","description":"Customer service representative","Status":"🔴Inactive"},
      {"groupname":"Driver","description":"Delivery driver","Status":"🟡Pending",},
      {"groupname":"Admin","description":"System administrator","Status":"🟢Active",},
      {"groupname":"Billing","description":"Billing specialist","Status":"🟡Pending"},
      {"groupname":"CC User","description":"Contact center user","Status":"🔴Inactive"},
      {"groupname":"CSR User","description":"Customer service representative","Status":"🟢Active"},
      {"groupname":"Driver","description":"Delivery driver","Status":"🔴Inactive",},
      {"groupname":"Admin","description":"System administrator","Status":"🔴Inactive",},
      {"groupname":"Billing","description":"Billing specialist","Status":"🟡Pending"},
      {"groupname":"CC User","description":"Contact center user","Status":"🟢Active"},
      {"groupname":"Customer Service Rep","description":"Customer service representative","Status":"🟢Active"},
      {"groupname":"Delivery Driver","description":"Delivery driver","Status":"🟡Pending",},
      {"groupname":"Administrator","description":"System administrator","Status":"🔴Inactive",},
      {"groupname":"Billing Specialist","description":"Billing specialist","Status":"🟡Pending"},
      {"groupname":"Contact Center User","description":"Contact center user","Status":"🟢Active"},
      {"groupname":"CSR","description":"Customer service representative","Status":"🔴Inactive"},
      {"groupname":"Delivery Personnel","description":"Delivery personnel","Status":"🔴Inactive",},
      {"groupname":"Sys Admin","description":"System administrator","Status":"🟢Active",},
      {"groupname":"Billing Admin","description":"Billing administrator","Status":"🟡Pending"},
      {"groupname":"Contact Center Agent","description":"Contact center agent","Status":"🟢Active"},
      {"groupname":"Customer Care Rep","description":"Customer care representative","Status":"🟡Pending"},
      {"groupname":"Driver Helper","description":"Driver helper","Status":"🔴Inactive",},
      {"groupname":"System Administrator","description":"System administrator","Status":"🟡Pending",},
      {"groupname":"Billing Clerk","description":"Billing clerk","Status":"🟢Active"},
      {"groupname":"CC Representative","description":"Contact center representative","Status":"🟡Pending"},
      {"groupname":"Customer Service Agent","description":"Customer service agent","Status":"🟢Active"},
      {"groupname":"Delivery Team Member","description":"Delivery team member","Status":"🟡Pending",},
      {"groupname":"Administrator Account","description":"Administrator account","Status":"🔴Inactive",},
      {"groupname":"Billing Coordinator","description":"Billing coordinator","Status":"🟢Active"},
      {"groupname":"Contact Center Specialist","description":"Contact center specialist","Status":"🔴Inactive"},
      {"groupname":"Customer Care Specialist","description":"Customer care specialist","Status":"🔴Inactive"},
      {"groupname":"Delivery Manager","description":"Delivery manager","Status":"🔴Inactive",},
      {"groupname":"Corporate Admin","description":"Corporate administrator","Status":"🟡Pending",},
      {"groupname":"Customer Service Supervisor","description":"Customer service supervisor","Status":"🟡Pending"},
      {"groupname":"Delivery Operations Manager","description":"Delivery operations manager","Status":"🔴Inactive",},
      {"groupname":"Corporate Administrator","description":"Corporate administrator","Status":"🟢Active",},
      {"groupname":"Billing Analyst","description":"Billing analyst","Status":"🔴Inactive"},
      {"groupname":"Contact Center Manager","description":"Contact center manager","Status":"🟡Pending"},
      {"groupname":"Customer Care Manager","description":"Customer care manager","Status":"🟢Active"},
      {"groupname":"Delivery Operations Supervisor","description":"Delivery operations supervisor","Status":"🟡Pending",},
      {"groupname":"Corporate User","description":"Corporate user","Status":"🔴Inactive",},
      {"groupname":"Billing Manager","description":"Billing manager","Status":"🟢Active"},
      {"groupname":"CC Supervisor","description":"Contact center supervisor","Status":"🔴Inactive"},
      {"groupname":"Customer Care Coordinator","description":"Customer care coordinator","Status":"🔴Inactive"},
      {"groupname":"Delivery Operations Coordinator","description":"Delivery operations coordinator","Status":"🟢Active",},
      {"groupname":"Corporate Manager","description":"Corporate manager","Status":"🟡Pending",},
      {"groupname":"Billing Supervisor","description":"Billing supervisor","Status":"🔴Inactive"},
      {"groupname":"CC Manager","description":"Contact center manager","Status":"🟢Active"},
      {"groupname":"Customer Care Administrator","description":"Customer care administrator","Status":"🟡Pending"},
      {"groupname":"Delivery Operations Administrator","description":"Delivery operations administrator","Status":"🔴Inactive",},
      {"groupname":"Corporate Supervisor","description":"Corporate supervisor","Status":"🟢Active",},
      {"groupname":"Billing Specialist Manager","description":"Billing specialist manager","Status":"🟡Pending"},
      {"groupname":"CC Director","description":"Contact center director","Status":"🔴Inactive"},
      {"groupname":"Customer Care Supervisor","description":"Customer care supervisor","Status":"🟡Pending"},
    ]    

    this.cols = [
      { field: "groupname", header: "Group Name" },
      { field: "description", header: "Description" },
      { field: "Status", header: "Status" },
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
