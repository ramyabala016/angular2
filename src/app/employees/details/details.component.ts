import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'emp-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class EmployeedetailsComponent implements OnInit {
 title : string = "Selected Employee Details ";
 //@Input() employeeData;
 @Input() employeeSelected;
  constructor() { }

  ngOnInit() {
  }

}
