import { Injectable } from "@angular/core";
import { Employee } from "./employee.model";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  formData: Employee;
  list: Employee[];
  // datatest:string;
  constructor(private http: HttpClient) {}
  postEmployee(formData: Employee) {
    return this.http.post("http://localhost:3000/employee", formData);
  }
  getEmployee() {
    this.http
      .get("http://localhost:3000/employee")
      .toPromise()
      .then(res => (this.list = res as Employee[]));
  }
  putEmoloyee(formData: Employee) {
    debugger;
    return this.http.put(
      "http://localhost:3000/employee/" + formData.id,
      formData
    );
  }
  deleteEmployee(id) {
    return this.http.delete("http://localhost:3000/employee/" + id);
  }
}
