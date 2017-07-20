import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Employee } from 'app/shared/models/employee';
@Component({
  selector: 'create-employee',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newEmployee :Employee = new Employee();

  @Output() employeeCreated = new EventEmitter(); //custom event

  createEmployee(){
    console.log('Employee Create called');
    console.log(this.newEmployee);
    //this.employeeCreated.emit('Something is emitted from child component');
    this.employeeCreated.emit(this.newEmployee);
    this.newEmployee = new Employee(); // form reset
  }
}
