import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css'],
  providers:[MessageService]
})
export class CreateRoleComponent {

  items = [{ label: 'Role Management', routerLink: '/role-management' }, { label: 'Create Role' }];
  home = { icon: 'pi pi-user', routerLink: '/' };
  role = [
    { "name": "Admin" },
    { "name": "Employee" }
  ]
  selectedCustomers: any
  expanded: any = {};
  customers = [
    {
      "data": { "name": "Admin", styleClass: "bg-dark", "faccess": true, "raccess": true },
      "children": [
        {
          "data": { "name": "Manager", "faccess": true, "raccess": true },
          "children": [
            { "data": { "name": "Employee Records", "faccess": true, "raccess": true } },
            { "data": { "name": "Financial Reports", "faccess": false, "raccess": true } }
          ]
        },
        {
          "data": { "name": "Analyst", "faccess": false, "raccess": true },
          "children": [
            { "data": { "name": "Sales Data", "faccess": false, "raccess": true } },
            { "data": { "name": "Marketing Metrics", "faccess": false, "raccess": true } }
          ]
        },
        {
          "data": { "name": "Developer", "faccess": true, "raccess": true },
          "children": [
            { "data": { "name": "Code Repository", "faccess": true, "raccess": true } },
            { "data": { "name": "Project Management Tool", "faccess": true, "raccess": true } }
          ]
        },
        {
          "data": { "name": "Guest", "faccess": false, "raccess": true },
          "children": [
            { "data": { "name": "Blog Posts", "faccess": false, "raccess": true } },
            { "data": { "name": "About Us Page", "faccess": false, "raccess": true } }
          ]
        },
        {
          "data": { "name": "Customer", "faccess": false, "raccess": true },
          "children": [
            { "data": { "name": "Order History", "faccess": false, "raccess": true } },
            { "data": { "name": "Product Reviews", "faccess": false, "raccess": true } }
          ]
        },
        {
          "data": { "name": "Salesperson", "faccess": true, "raccess": true },
          "children": [
            { "data": { "name": "Lead List", "faccess": true, "raccess": true } },
            { "data": { "name": "Sales Pipeline", "faccess": true, "raccess": true } }
          ]
        },
        {
          "data": { "name": "Support", "faccess": false, "raccess": true },
          "children": [
            { "data": { "name": "Ticket History", "faccess": false, "raccess": true } },
            { "data": { "name": "Knowledge Base", "faccess": false, "raccess": true } }
          ]
        },
        {
          "data": { "name": "Executive", "faccess": true, "raccess": true },
          "children": [
            { "data": { "name": "Company Performance", "faccess": true, "raccess": true } },
            { "data": { "name": "Board Meeting Minutes", "faccess": true, "raccess": true } }
          ]
        },
      ]
    },
    {
      "data": {
        "name": "Customer",
        "faccess": false,
        "raccess": true
      },
      "children": [
        {
          "data": {
            "name": "Profile",
            "faccess": false,
            "raccess": true
          },
          "children": [
            {
              "data": {
                "name": "Personal Info",
                "faccess": false,
                "raccess": true
              },
              "children": [
                { "data": { "name": "Name", "faccess": false, "raccess": true } },
                { "data": { "name": "Email", "faccess": false, "raccess": true } },
                { "data": { "name": "Phone", "faccess": false, "raccess": true } }
              ]
            },
            {
              "data": {
                "name": "Billing Info",
                "faccess": false,
                "raccess": true
              },
              "children": [
                { "data": { "name": "Billing Address", "faccess": false, "raccess": true } },
                { "data": { "name": "Payment Info", "faccess": false, "raccess": false } }
              ]
            }
          ]
        },
        {
          "data": {
            "name": "Orders",
            "faccess": false,
            "raccess": true
          },
          "children": [
            { "data": { "name": "Order History", "faccess": false, "raccess": true } },
            { "data": { "name": "Pending Orders", "faccess": false, "raccess": true } },
            { "data": { "name": "Returns and Refunds", "faccess": false, "raccess": false } }
          ]
        },
        {
          "data": {
            "name": "Product Reviews",
            "faccess": false,
            "raccess": true
          }
        },
        {
          "data": {
            "name": "Wishlist",
            "faccess": false,
            "raccess": true
          }
        },
        {
          "data": {
            "name": "Recommendations",
            "faccess": false,
            "raccess": true
          }
        }
      ]},
      {
        "data": {
          "name": "Dealer",
          "styleClass": "bg-dark",
          "faccess": true,
          "raccess": true
        },
        "children": [
          {
            "data": {
              "name": "Location",
              "faccess": true,
              "raccess": true
            },
            "children": [
              {
                "data": {
                  "name": "Address",
                  "faccess": true,
                  "raccess": true
                },
                "children": [
                  {"data": {"name": "Street", "faccess": true, "raccess": true}},
                  {"data": {"name": "City", "faccess": true, "raccess": true}},
                  {"data": {"name": "State", "faccess": true, "raccess": true}},
                  {"data": {"name": "Zip", "faccess": true, "raccess": true}}
                ]
              }
            ]
          },
          {
            "data": {
              "name": "Contact",
              "faccess": true,
              "raccess": true
            },
            "children": [
              {"data": {"name": "Phone", "faccess": true, "raccess": true}},
              {"data": {"name": "Email", "faccess": true, "raccess": true}}
            ]
          },
          {
            "data": {
              "name": "Business Information",
              "faccess": true,
              "raccess": true
            },
            "children": [
              {"data": {"name": "Years in Business", "faccess": true, "raccess": true}},
              {"data": {"name": "Number of Employees", "faccess": true, "raccess": true}},
              {"data": {"name": "Product Lines", "faccess": true, "raccess": true}},
              {"data": {"name": "Sales Volume", "faccess": true, "raccess": true}},
              {"data": {"name": "Marketing Strategy", "faccess": true, "raccess": true}},
              {"data": {"name": "Competition Analysis", "faccess": true, "raccess": true}}
            ]
          },
          {
            "data": {
              "name": "Inventory",
              "faccess": true,
              "raccess": true
            },
            "children": [
              {"data": {"name": "Vehicles", "faccess": true, "raccess": true}},
              {"data": {"name": "Parts and Accessories", "faccess": true, "raccess": true}}
            ]
          },
          {
            "data": {
              "name": "Finance and Accounting",
              "faccess": true,
              "raccess": true
            },
            "children": [
              {"data": {"name": "Accounts Payable", "faccess": true, "raccess": true}},
              {"data": {"name": "Accounts Receivable", "faccess": true, "raccess": true}},
              {"data": {"name": "Taxation", "faccess": true, "raccess": true}},
              {"data": {"name": "Financial Statements", "faccess": true, "raccess": true}}
            ]
          }
        ]
      }      
  ]
  constructor(private messageService: MessageService, private router: Router){}
  createRole(){
    this.messageService.add({ severity: 'success', summary: 'Form Saved', detail: 'Form Saved Successfully' });
    setTimeout(() => {
      this.router.navigate(['role-management'])
    }, 1500);
  }
}
