import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeedetailsComponent } from './details.component';

describe('EmployeedetailsComponent', () => {
  let component: EmployeedetailsComponent;
  let fixture: ComponentFixture<EmployeedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
