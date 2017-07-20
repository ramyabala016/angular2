import { Component } from '@angular/core';
import { Employee } from '../shared/models/employee';
@Component({
    selector: 'employees',
    templateUrl: './employees.component.html',
    //template:`<h1>test content</h1>`
})
export class Employeescomponent {
  title : string = 'List of Content';  
  numberofEmployees = 100;
  randomVar; //any content type 
  myNumber: number = 3;
  myString: string = 'ramy';
  myBoolean: boolean = true;
  
  employee: Employee = {
    emp_no : 9,
    fname : 'ramya',
    lname : 'b',
    city : 'Bangalore',
    dob:20
  };
  listofEmployees: Employee[] =[
    {
    emp_no : 9,
    fname : 'ramya',
    lname : 'b',
    city: 'Coimbatore',
    dob:30
  },
  {
    emp_no : 12,
    fname : 'Bala',
    lname : 'K',
    city: 'POY',
    dob:25
  },
  {
    emp_no : 7,
    fname : 'Sugan',
    lname : 'S',
    city: 'bangalore',
    dob:60
    }
  ];
  actors:string[] = ['Surya','Ravi','Karthik'];
  cityName = 'Bangalore';
  constructor() {
    this.myBoolean = false;
   }
   submitCity(){
     console.log('Submitted');
     console.log(this.cityName);
   }

}