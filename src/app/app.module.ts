import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Employeescomponent } from './employees/employees.component';
import { AboutComponent } from './about/about.component';
import { CreateEmployeeComponent } from './employees/create/create.component';
import { EmployeedetailsComponent } from './employees/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Employeescomponent,
    AboutComponent,
    CreateEmployeeComponent,
    EmployeedetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
