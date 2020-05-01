import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Employees } from 'src/Employees';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {
  employee: Employees = new Employees(0,"","","");
  message: any;
  constructor(private service: CustomerService) { }


  ngOnInit(): void {
  }
  public registerNow(){
    console.log(this.employee.firstName);
    let response = this.service.doRegister(this.employee);
    response.subscribe((data)=>this.message=data);
  }

}
