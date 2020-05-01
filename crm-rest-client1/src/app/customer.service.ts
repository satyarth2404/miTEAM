import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employees } from 'src/Employees';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  public getCustomers(){
    return this.http.get("http://localhost:8085/api/employees");
  }
  public doRegister(employee: Employees){
    return this.http.post("http://localhost:8085/api/employees",employee,{responseType: 'text' as 'json'});
  }

  public deleteUser(id){
    return this.http.delete("http://localhost:8085/api/employees/"+id);
  }
}
