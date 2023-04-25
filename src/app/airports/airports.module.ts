import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AirportsComponent } from './airports.component';
const routes : Routes=[{
  path:'',component:AirportsComponent
}]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AirportsModule { }
