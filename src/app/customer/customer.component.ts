import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
name:any;
natAccountId:any
stationId:any;
customercode:any;
constructor(private http :HttpClient){

}
onSubmit(){
  let header = new HttpHeaders({
    'Content-type':'Application/json'
  })
  let options = {headers:header}
  let data =
    {
      "custCode": this.customercode,
      "natAccountId": this.natAccountId,
      "stationId": this.stationId,
      "name": this.name
    }
  return this.http.post("https://localhost:7211/CustomerTemp/AddCustomerTemps",data,options).subscribe(
    
  )
}

}
