import { Component } from '@angular/core';
import { Employee } from './shared/models/employee';
import { EmployeesList } from './shared/mock-data/employeeList'; //just imported

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';
  gridData: Employee[] = EmployeesList;
  /*listofEmployees: Employee[] =[
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
  ];*/
  /*employeeFromAppComponent: Employee = {
    emp_no : 9,
    fname : 'ramya',
    lname : 'b',
    city : 'Bangalore',
    dob:20
  };*/
  SelectedEmployee: Employee;
  showEmployee(employee: Employee){
    console.log(employee);
    this.SelectedEmployee = employee;
  }
  /*myStyleObject={
    GreyBackground :true;
  }*/
  selectedTheme = { //Variable Object
    GreyBackground:true,
    pinkBackground:false,
    pinkBackground1:false, //test obj without CSS/style class
  }
  setGreyTheme(){ // function to be called on click
    this.selectedTheme.GreyBackground=true; //GreyBackground is class name
    this.selectedTheme.pinkBackground=false;
  }
  setPinkTheme(){
    this.selectedTheme.GreyBackground=false;
    this.selectedTheme.pinkBackground=true;
  }
  toggleTheme(){
    if(this.selectedTheme.GreyBackground){
      this.selectedTheme.GreyBackground=false;
      this.selectedTheme.pinkBackground=true;
    }else{
      this.selectedTheme.GreyBackground=true;
      this.selectedTheme.pinkBackground=false;
      this.selectedTheme.pinkBackground1=true; // Applying Multiple Classes using test obj
    }
  }

  onEmployeeCreated(eventData){
    console.log('onEmployeeCreated event');
    this.gridData.push(eventData);
  }
}
