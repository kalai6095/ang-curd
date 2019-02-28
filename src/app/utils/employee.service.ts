import {Injectable} from '@angular/core';
import {Employee} from './employee.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn : 'root'
})
export class EmployeeService {

  formData: Employee;
  rootUrl = 'http://localhost:1880/api/';

  constructor(private http: HttpClient) {
  }

  postEmployee(formData: Employee) {
    return this.http.post(`${this.rootUrl}employee` , formData);
  }
}
