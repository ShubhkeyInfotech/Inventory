import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [MessageService]
})
export class AddUserComponent {
  users = [
    "Station Manager", "Employee"
  ]
  roles = [
    { name: 'Admin' },
    { name: 'User' },
    { name: 'Logistics' },
    { name: 'FSL' }
  ]
  acname: any;
  customername: any;
  role = sessionStorage.getItem('type');
  col: any;
  fedextype = 'direct';
  url = "http://192.168.1.25:7053/api/controller/register"
  visible = false
  selectedSize: any;
  items = [{ label: 'User Management', routerLink: '/user-management' }, { label: 'Create Account' }];
  home = { icon: 'pi pi-user', routerLink: '/' };
  account = [
    { "account": "123456789", "acname": "ABC Enterprise", "Status": "🟢Active" }
  ]
  courier = [
    { "courierID": "123456", "name": "Fast and Forward", "Status": "🟢Active", "agentcode": "123", "country": "India", "state": "Gujrat", "city": "Ahmedabad", "type": "Electronics", "qscore": "98" }
  ]
  coustomerAccount = [
    { "account": "123456789", "acname": "ABC Enterprise", "Status": "🟢Active", "address": "Ahmedabad Central Area", "country": "India", "state": "Gujrat", "city": "Ahmedabad", "zip": "380001" }
  ]
  courriercol = [
    { field: "courierID", header: "Courier ID" },
    { field: "name", header: "Name" },
    { field: "Status", header: "Status" },
  ];
  addcouriercol = [
    { field: "courierID", header: "Courier ID" },
    { field: "name", header: "Name" },
    { field: "agentcode", header: "Agent Code" },
    { field: "country", header: "Country" },
    { field: "state", header: "State" },
    { field: "city", header: "City" },
    { field: "type", header: "Type" },
    { field: "qscore", header: "Quality Score" },
    { field: "Status", header: "Status" },
  ]
  vehicleType = [
    { name: "Bike" },
    { name: "car" },
    { name: "Truck" }
  ]
  state = [
    { name: "Gujrat" },
    { name: "Rajsthan" }
  ]
  country = [
    { name: "India" },
    { name: "Canada" }
  ]
  type = [
    { name: "type1" },
    { name: "type2" }
  ]
  customercol = [
    { field: "account", header: "Account#" },
    { field: "acname", header: "Account Name" },
    { field: "Status", header: "Status" },
  ]
  addaccountcol = [
    { field: "account", header: "Account#" },
    { field: "acname", header: "Account Name" },
    { field: "address", header: "Address Line 1" },
    { field: "city", header: "City" },
    { field: "state", header: "State" },
    { field: "zip", header: "Zip" },
    { field: "country", header: "Country" },
    { field: "Status", header: "Status" },
  ]
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
  sizes: any;
  addcourier = false
  filter = false;
  addaccount = false;
  customerfilter = false;
  constructor(private messageService: MessageService, private router: Router, private http: HttpClient) {
    console.log(this.role)
    sessionStorage.clear();
    this.col = [
      { field: "account", header: "FedEx Account#" },
      { field: "acname", header: "Account Name" },
      { field: "Status", header: "Status" },
    ];
    this.sizes = [
      { name: 'Compact View', "class": 'p-datatable-sm' },
      { name: 'Normal View', "class": '' },
      { name: 'Tall View', "class": 'p-datatable-lg' }
    ]
  }

  update() {
    this.messageService.add({ severity: 'success', summary: 'Form Saved', detail: 'Form Saved Successfully' });
    setTimeout(() => {
      this.router.navigate(['user-management'])
    }, 1500);
  }
  filterFedexean() {

  }
}
