import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [MessageService]
})
export class HeaderComponent {
  items = [
    { "label": "My Profile  ", "routerLink": "/airport-search" },
    { "label": "Change Password", command: () => this.showDialog() },
    { "label": "Logout", "routerLink": "/airport-search" }
  ]
  data: MenuItem[] = [
    //   {
    //   "label": "Oprations",
    //   "items": [
    //     {
    //       "label": "File",
    //       "items": [
    //         {
    //           "label": "New",
    //           "items": [
    //             { "label": "Bookmark" }, { "label": "Video" }
    //           ]
    //         },
    //         { "label": "Delete" },
    //         { "separator": true },
    //         { "label": "Export" }
    //       ]
    //     },
    //     {
    //       "label": "Edit",
    //       "items": [
    //         { "label": "Left" },
    //         { "label": "Right" },
    //         { "label": "Center" },
    //         { "label": "Justify" }
    //       ]
    //     },
    //     {
    //       "label": "Users",
    //       "items": [
    //         { "label": "New" },
    //         { "label": "Delete" },
    //         {
    //           "label": "Search",
    //           "items": [
    //             {
    //               "label": "Filter",
    //               "items": [
    //                 { "label": "Print" }
    //               ]
    //             },
    //             { "label": "List" }
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       "label": "Events",
    //       "items": [
    //         {
    //           "label": "Edit",
    //           "items": [
    //             { "label": "Save" },
    //             { "label": "Delete" }
    //           ]
    //         },
    //         {
    //           "label": "Archieve",
    //           "items": [
    //             { "label": "Remove" }
    //           ]
    //         }
    //       ]
    //     }
    //   ]
    // },
    { "label": "Customers", "routerLink": "/airport-search" },
    { "label": "Vendor", "routerLink": "/action" },
    { "label": "Rating", "routerLink": "/action" },
    { "label": "Billing", "routerLink": "/" },
      {
        "label": "Admin",
        "items": [
          {
            "label": "User",
            "items": [
              {
                "label": "User Management",
                "routerLink": "/user-management"
              },
              {
                "label": "Edit Users",
                "routerLink": "/edit-employee"
              },
              {
                "label": "Role Management",
                "routerLink": "/role-management"
              },
              {
                "label": "User Group",
                "routerLink": "/user-group"
              },
            ],
          }
        ]
      },
    { "label": "User", "routerLink": "/action" }
  ]
  show = false
  currentRoute: any
  visible: boolean | undefined;
  routerLinks = [
    {
      "label": "Admin",
      "routerLink": "/add-user"
    },
    {
      "label": "Admin",
      "routerLink": "/create-role"
    },
    {
      "label": "Admin",
      "routerLink": "/create-user-group"
    }
  ]
  constructor(private router: Router, private messageService: MessageService) {
    this.router.events.subscribe((val: any) => {
      if (val["type"] === 1) {
        this.data.forEach((value: any) => {
          if (isOuterLink(value.label, val['url'], this.routerLinks)) {
            value.styleClass = "active";
          } else {
            if (value.routerLink !== undefined) {
              if (value.routerLink === val['url']) {
                value.styleClass = "active";
              } else {
                value.styleClass = "";
              }
            } else {
              if (findNode(val['url'], value.items)) {
                value.styleClass = "active";
              } else {
                value.styleClass = "";
              }
            }
          }
        });
      }
      function findNode(link: any, items: any) {
        let exists = false;
        items.forEach((value: any) => {
          if (value.routerLink !== undefined) {
            if (value.routerLink === link) {
              exists = true;
            }
          } else {
            if (findNode(link, value.items)) {
              exists = true;
            }
          }
        });
        return exists;
      }
      function isOuterLink(name: string, link: string, routerLinks: any) {
        let exists = false;
        routerLinks.forEach((value: any) => {
          if (value.label == name && value.routerLink == link) { exists = true; }
        });
        return exists;
      }
    });
  }
  showDialog() {
    this.visible = true;
  }
  submit() {
    this.messageService.add({ severity: 'success', summary: 'Password Change', detail: 'Password Changed Successfully' });
    this.visible = false;
  }
}

