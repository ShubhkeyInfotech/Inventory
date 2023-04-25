import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-user-group',
  templateUrl: './create-user-group.component.html',
  styleUrls: ['./create-user-group.component.css'],
  providers:[MessageService]
})
export class CreateUserGroupComponent {
  items: any;
  home: any;
  users: any;
  cols: any;
  search: any;
  selectedRoles: any
  _selectedColumns: any[] | undefined;
  sizes: any = '';
  selectedSize: any
  roles: any;
  filter=false
  constructor(private messageService: MessageService, private router: Router) { }
  ngOnInit() {
    this.sizes = [
      { name: 'Compact View', "class": 'p-datatable-sm' },
      { name: 'Normal View', "class": '' },
      { name: 'Tall View', "class": 'p-datatable-lg' }
    ]
    this.items = [{ label: 'User Group' , routerLink:'/user-group'},{ label: 'Create User Group'}];
    this.home = { icon: 'pi pi-user', routerLink: '/' };
    this.users = [
      { "loginID": "8764321", "fname": "James", "lname": "Jones", "email": "jamesjohnes@gmail.com", "phone": "1234567890", "Company": "Trapido Corporation", "Status": "🟢 active" },
      { "loginID": "5439876", "fname": "Sarah", "lname": "Smith", "email": "sarahsmith@gmail.com", "phone": "0987654321", "Company": "Global Ventures Inc.", "Status": "🟡 pending" },
      { "loginID": "2345678", "fname": "John", "lname": "Doe", "email": "johndoe@yahoo.com", "phone": "5551234567", "Company": "Acme Corp", "Status": "🟢 active" },
      { "loginID": "8912345", "fname": "Emily", "lname": "Williams", "email": "emilywilliams@hotmail.com", "phone": "3219876543", "Company": "Innovate LLC", "Status": "🟡 pending" },
      { "loginID": "6578901", "fname": "Michael", "lname": "Brown", "email": "michaelbrown@gmail.com", "phone": "4567890123", "Company": "Alpha Inc.", "Status": "🟢 active" },
      { "loginID": "4321567", "fname": "Jessica", "lname": "Davis", "email": "jessicadavis@yahoo.com", "phone": "9876543210", "Company": "Beta Corp", "Status": "🔴 inactive" },
      { "loginID": "1234567", "fname": "David", "lname": "Lee", "email": "davidlee@gmail.com", "phone": "1112223333", "Company": "Gamma LLC", "Status": "🟢 active" },
      { "loginID": "8765432", "fname": "Amanda", "lname": "Taylor", "email": "amandataylor@hotmail.com", "phone": "4445556666", "Company": "Delta Inc.", "Status": "🟡 pending" },
      { "loginID": "3456789", "fname": "Chris", "lname": "Wilson", "email": "chriswilson@yahoo.com", "phone": "7778889999", "Company": "Epsilon Corp", "Status": "🟢 active" },
      { "loginID": "9012345", "fname": "Stephanie", "lname": "Clark", "email": "stephanieclark@gmail.com", "phone": "0123456789", "Company": "Zeta LLC", "Status": "🟡 pending" },
      { "loginID": "6789012", "fname": "Mark", "lname": "Gonzalez", "email": "markgonzalez@hotmail.com", "phone": "4561237890", "Company": "Theta Inc.", "Status": "🟢 active" },
      { "loginID": "2345678", "fname": "Anna", "lname": "Scott", "email": "annascott@yahoo.com", "phone": "9998887777", "Company": "Iota Corp", "Status": "🔴 inactive" },
      { "loginID": "7890123", "fname": "Eric", "lname": "Ramirez", "email": "ericramirez@gmail.com", "phone": "8887776666", "Company": "Kappa LLC", "Status": "🟢 active" },
      { "loginID": "3456123", "fname": "Rachel", "lname": "Peterson", "email": "rachelpeterson@hotmail.com", "phone": "1234567890", "Company": "Lambda Inc.", "Status": "🟡 pending" },
      { "loginID": "9012341", "fname": "Jason", "lname": "Wang", "email": "jasonwang@yahoo.com", "phone": "4567890123", "Company": "Mu Corp", "Status": "🟢 active" },
      { "loginID": "5678901", "fname": "Samantha", "lname": "Li", "email": "samanthali@gmail.com", "phone": "9876543210", "Company": "Nu LLC", "Status": "🟡 pending" },
      { "loginID": "0987654", "fname": "Jessica", "lname": "Davis", "email": "jessicadavis@gmail.com", "phone": "5559876543", "Company": "Acme Corp", "Status": "🟢 active" },
      { "loginID": "2345678", "fname": "David", "lname": "Lee", "email": "davidlee@hotmail.com", "phone": "1234567890", "Company": "Global Ventures Inc.", "Status": "🟢 active" },
      { "loginID": "3456789", "fname": "Emily", "lname": "Williams", "email": "emilywilliams@yahoo.com", "phone": "3216540987", "Company": "Alpha Inc.", "Status": "🔴 inactive" },
      { "loginID": "4567890", "fname": "Michael", "lname": "Brown", "email": "michaelbrown@gmail.com", "phone": "7890123456", "Company": "Beta Corp", "Status": "🟡 pending" },
      { "loginID": "5678901", "fname": "Sarah", "lname": "Smith", "email": "sarahsmith@hotmail.com", "phone": "9876543210", "Company": "Zeta LLC", "Status": "🟢 active" },
      { "loginID": "6789012", "fname": "Chris", "lname": "Wilson", "email": "chriswilson@yahoo.com", "phone": "5551234567", "Company": "Theta Inc.", "Status": "🟡 pending" },
      { "loginID": "7890123", "fname": "Amanda", "lname": "Taylor", "email": "amandataylor@gmail.com", "phone": "4445556666", "Company": "Innovate LLC", "Status": "🔴 inactive" },
      { "loginID": "8901234", "fname": "Stephanie", "lname": "Clark", "email": "stephanieclark@hotmail.com", "phone": "1112223333", "Company": "Epsilon Corp", "Status": "🟢 active" },
      { "loginID": "9012345", "fname": "Mark", "lname": "Gonzalez", "email": "markgonzalez@yahoo.com", "phone": "7778889999", "Company": "Gamma LLC", "Status": "🟡 pending" },
      { "loginID": "0123456", "fname": "Anna", "lname": "Scott", "email": "annascott@gmail.com", "phone": "2223334444", "Company": "Kappa LLC", "Status": "🔴 inactive" },
      { "loginID": "1234567", "fname": "Rachel", "lname": "Peterson", "email": "rachelpeterson@hotmail.com", "phone": "9876543210", "Company": "Lambda Inc.", "Status": "🟢 active" },
      { "loginID": "2345678", "fname": "Eric", "lname": "Ramirez", "email": "ericramirez@gmail.com", "phone": "0123456789", "Company": "Nu LLC", "Status": "🟡 pending" },
      { "loginID": "3456789", "fname": "Jason", "lname": "Wang", "email": "jasonwang@yahoo.com", "phone": "5551234567", "Company": "Mu Corp", "Status": "🟢 active" },
      { "loginID": "4567890", "fname": "Samantha", "lname": "Li", "email": "samanthali@hotmail.com", "phone": "9998887777", "Company": "Iota Corp", "Status": "🔴 inactive" },
      { "loginID": "5678901", "fname": "James", "lname": "Jones", "email": "jamesjones@gmail.com", "phone": "1234567890", "Company": "Trapido Corporation", "Status": "🟡 pending" },
      { "loginID": "1234567", "fname": "John", "lname": "Doe", "email": "johndoe@gmail.com", "phone": "555-1234", "Company": "ABC Inc.", "Status": "🟢 active" },
      { "loginID": "2345678", "fname": "Jane", "lname": "Smith", "email": "janesmith@hotmail.com", "phone": "555-5678", "Company": "XYZ Corp.", "Status": "🔴 inactive" },
      { "loginID": "3456789", "fname": "Bob", "lname": "Johnson", "email": "bjohnson@yahoo.com", "phone": "555-9012", "Company": "LMN Enterprises", "Status": "🟡 pending" },
      { "loginID": "4567890", "fname": "Sarah", "lname": "Lee", "email": "sarahlee@gmail.com", "phone": "555-3456", "Company": "NOP Inc.", "Status": "🟢 active" },
      { "loginID": "5678901", "fname": "James", "lname": "Jones", "email": "jamesjones@gmail.com", "phone": "1234567890", "Company": "Trapido Corporation", "Status": "🟡 pending" },
      { "loginID": "6789012", "fname": "Samantha", "lname": "Nguyen", "email": "samnguyen@yahoo.com", "phone": "555-7890", "Company": "PQR Corp.", "Status": "🟢 active" },
      { "loginID": "7890123", "fname": "Michael", "lname": "Brown", "email": "michaelbrown@gmail.com", "phone": "555-2345", "Company": "DEF Enterprises", "Status": "🟢 active" },
      { "loginID": "8901234", "fname": "Emily", "lname": "Davis", "email": "emilydavis@hotmail.com", "phone": "555-6789", "Company": "GHI Inc.", "Status": "🔴 inactive" },
      { "loginID": "9012345", "fname": "Matthew", "lname": "Wang", "email": "matthewwang@gmail.com", "phone": "555-1234", "Company": "JKL Corp.", "Status": "🟢 active" },
      { "loginID": "0123456", "fname": "Jessica", "lname": "Park", "email": "jessicapark@yahoo.com", "phone": "555-5678", "Company": "MNO Enterprises", "Status": "🟢 active" },
      { "loginID": "1234567", "fname": "Benjamin", "lname": "Garcia", "email": "benjamingarcia@hotmail.com", "phone": "555-9012", "Company": "ABC Inc.", "Status": "🟡 pending" },
      { "loginID": "2345678", "fname": "Alexandra", "lname": "Brown", "email": "alexandrabrown@gmail.com", "phone": "555-3456", "Company": "XYZ Corp.", "Status": "🔴 inactive" },
      { "loginID": "3456789", "fname": "William", "lname": "Chen", "email": "williamchen@yahoo.com", "phone": "555-7890", "Company": "LMN Enterprises", "Status": "🟢 active" },
      { "loginID": "4567890", "fname": "Rachel", "lname": "Lee", "email": "rachellee@gmail.com", "phone": "555-2345", "Company": "NOP Inc.", "Status": "🔴 inactive" },
      { "loginID": "5678901", "fname": "Brandon", "lname": "Nguyen", "email": "brandonnguyen@hotmail.com", "phone": "555-6789", "Company": "Trapido Corporation", "Status": "🟢 active" },
      { "loginID": "6789012", "fname": "Megan", "lname": "Gonzales", "email": "megangonzales@yahoo.com", "phone": "555-1234", "Company": "PQR Corp.", "Status": "🟡 pending" },
      { "loginID": "7890123", "fname": "Aryan", "lname": "Miller", "email": "nathanmiller@gmail.com", "phone": "555-5678", "Company": "GHI Inc.", "Status": "🟢 active" },
      { "loginID": "1234567", "fname": "Rachel", "lname": "Anderson", "email": "rachelanderson@hotmail.com", "phone": "555-9012", "Company": "ABC Inc.", "Status": "🔴 inactive" },
      { "loginID": "2345678", "fname": "Eric", "lname": "Gonzales", "email": "ericgonzales@gmail.com", "phone": "555-3456", "Company": "XYZ Corp.", "Status": "🟢 active" },
      { "loginID": "3456789", "fname": "Kelly", "lname": "Kim", "email": "kellykim@yahoo.com", "phone": "555-7890", "Company": "LMN Enterprises", "Status": "🟢 active" },
      { "loginID": "4567890", "fname": "Nicholas", "lname": "Nguyen", "email": "nicholasnguyen@gmail.com", "phone": "555-2345", "Company": "NOP Inc.", "Status": "🟢 active" },
      { "loginID": "5678901", "fname": "Lauren", "lname": "Garcia", "email": "laurengarcia@hotmail.com", "phone": "555-6789", "Company": "Trapido Corporation", "Status": "🟡 pending" },
      { "loginID": "6789012", "fname": "Jordan", "lname": "Chen", "email": "jordanchen@gmail.com", "phone": "555-1234", "Company": "PQR Corp.", "Status": "🟢 active" },
      { "loginID": "7890123", "fname": "Sara", "lname": "Lee", "email": "saralee@hotmail.com", "phone": "555-5678", "Company": "DEF Enterprises", "Status": "🟢 active" },
      { "loginID": "8901234", "fname": "Daniel", "lname": "Kim", "email": "danielkim@yahoo.com", "phone": "555-9012", "Company": "GHI Inc.", "Status": "🟢 active" },
      { "loginID": "9012345", "fname": "Olivia", "lname": "Chang", "email": "oliviachang@gmail.com", "phone": "555-3456", "Company": "JKL Corp.", "Status": "🔴 inactive" },
      { "loginID": "0123456", "fname": "Maxwell", "lname": "Nguyen", "email": "maxwellnguyen@yahoo.com", "phone": "555-7890", "Company": "MNO Enterprises", "Status": "🟢 active" },
      { "loginID": "1234567", "fname": "Avery", "lname": "Johnson", "email": "averyjohnson@gmail.com", "phone": "555-2345", "Company": "ABC Inc.", "Status": "🟡 pending" },
      { "loginID": "2345678", "fname": "Brianna", "lname": "Lee", "email": "briannalee@hotmail.com", "phone": "555-6789", "Company": "XYZ Corp.", "Status": "🟢 active" },
      { "loginID": "3456789", "fname": "Thomas", "lname": "Wong", "email": "thomaswong@yahoo.com", "phone": "555-1234", "Company": "LMN Enterprises", "Status": "🟡 pending" },
      { "loginID": "4567890", "fname": "Julia", "lname": "Kim", "email": "juliakim@gmail.com", "phone": "555-5678", "Company": "NOP Inc.", "Status": "🔴 inactive" },
      { "loginID": "5678901", "fname": "Connor", "lname": "Garcia", "email": "connorgarcia@hotmail.com", "phone": "555-9012", "Company": "Trapido Corporation", "Status": "🟢 active" },
      { "loginID": "6789012", "fname": "Sophia", "lname": "Chen", "email": "sophiapark@gmail.com", "phone": "555-3456", "Company": "PQR Corp.", "Status": "🟢 active" },
      { "loginID": "7890123", "fname": "Adam", "lname": "Lee", "email": "adamlee@hotmail.com", "phone": "555-7890", "Company": "DEF Enterprises", "Status": "🔴 inactive" },
      { "loginID": "8901234", "fname": "Emily", "lname": "Nguyen", "email": "emilynguyen@yahoo.com", "phone": "555-2345", "Company": "GHI Inc.", "Status": "🟢 active" },
      { "loginID": "9012345", "fname": "William", "lname": "Chang", "email": "williamchang@gmail.com", "phone": "555-6789", "Company": "JKL Corp.", "Status": "🟢 active" },
      { "loginID": "0123456", "fname": "Chloe", "lname": "Johnson", "email": "chloejohnson@hotmail.com", "phone": "555-1234", "Company": "MNO Enterprises", "Status": "🔴 inactive" },
      { "loginID": "1234567", "fname": "Miles", "lname": "Lee", "email": "mileslee@gmail.com", "phone": "555-5678", "Company": "ABC Inc.", "Status": "🟢 active" },
      { "loginID": "2345678", "fname": "Ava", "lname": "Wong", "email": "avawong@yahoo.com", "phone": "555-9012", "Company": "XYZ Corp.", "Status": "🟡 pending" },
      { "loginID": "3456789", "fname": "Jacob", "lname": "Kim", "email": "jacobkim@gmail.com", "phone": "555-3456", "Company": "LMN Enterprises", "Status": "🟢 active" },
      { "loginID": "4567890", "fname": "Emma", "lname": "Nguyen", "email": "emmanguyen@hotmail.com", "phone": "555-7890", "Company": "NOP Inc.", "Status": "🔴 inactive" },
      { "loginID": "5678901", "fname": "Ethan", "lname": "Garcia", "email": "ethangarcia@gmail.com", "phone": "555-2345", "Company": "Trapido Corporation", "Status": "🟢 active" },
      { "loginID": "6789012", "fname": "Avery", "lname": "Chen", "email": "averychen@yahoo.com", "phone": "555-6789", "Company": "PQR Corp.", "Status": "🟢 active" },
      { "loginID": "7890123", "fname": "Sophie", "lname": "Lee", "email": "sophielee@gmail.com", "phone": "555-1234", "Company": "DEF Enterprises", "Status": "🟢 active" },
      { "loginID": "8901234", "fname": "Owen", "lname": "Nguyen", "email": "owennguyen@hotmail.com", "phone": "555-5678", "Company": "GHI Inc.", "Status": "🟢 active" },
      { "loginID": "9012345", "fname": "Isabella", "lname": "Chang", "email": "isabellachang@yahoo.com", "phone": "555-9012", "Company": "JKL Corp.", "Status": "🟢 active" },
      { "loginID": "0123456", "fname": "Lucas", "lname": "Johnson", "email": "lucasjohnson@gmail.com", "phone": "555-3456", "Company": "MNO Enterprises", "Status": "🔴 inactive" },
      { "loginID": "1234567", "fname": "Aria", "lname": "Lee", "email": "arialee@hotmail.com", "phone": "555-7890", "Company": "ABC Inc.", "Status": "🟢 active" },
    ];
this.roles=[
  {name:'Agent'}
]
    this.cols = [
      { field: "fname", header: "First Name" },
      { field: "lname", header: "Last Name" },
      { field: "email", header: "Email" },
      { field: "phone", header: "Phone" },
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
  f1() {
      this.router.navigate(['/add-user'])
  }
  createUserGroup(){
    this.messageService.add({ severity: 'success', summary: 'Form Saved', detail: 'Form Saved Successfully' });
    setTimeout(() => {
      this.router.navigate(['create-user-group'])
    }, 1500);
  }
}
