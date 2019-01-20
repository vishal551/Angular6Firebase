import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import{HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

    formData:Employee
// datatest:string;
  constructor(private http:HttpClient) { }
  postEmployee(formData:Employee){
    debugger;
return  this.http.post("http://localhost:3000/employee",formData)
  }
}
