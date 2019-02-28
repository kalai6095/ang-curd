import {Injectable} from '@angular/core';
import {Employee} from './employee.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData: Employee;
  readonly rootUrl = 'http://localhost:1880/api/';
  emplist: Employee[];

  constructor(private http: HttpClient) {
  }

  postEmployee(formData: Employee) {
    return this.http.post(`${this.rootUrl}employee`, formData);
  }

  getEmployeeList(){
    return this.http.get(`${this.rootUrl}employees`);
  }
  getEmployees() {
    return this.http.get(`${this.rootUrl}employees`).toPromise().then(
      res => this.emplist = res as Employee[]);

  }

  deleteEmployee(id: number) {
    return this.http.delete(`${this.rootUrl}employee/` + id);
  }

  updateEmployee(formData: Employee) {
    alert()
    return this.http.put(`${this.rootUrl}employee`, formData);
  }
}
