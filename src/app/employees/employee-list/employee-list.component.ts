import {Component , Input , OnInit} from '@angular/core';
import {EmployeeService} from '../../utils/employee.service';
import {EmployeeComponent} from '../employee/employee.component';
import {ToastrService} from 'ngx-toastr';
import {Employee} from '../../utils/employee.model';

@Component({
  selector : 'app-employee-list' ,
  templateUrl : './employee-list.component.html' ,
  styleUrls : ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: any;

  //@Input() emp: EmployeeComponent;

  constructor(private empService: EmployeeService ,
              private toaster: ToastrService) {
  }

  ngOnInit() {

    this.getemployees();
  }

  getemployees() {

    this.empService.getEmployees();
    /*this.empService.getEmployeeList().subscribe(
      emps => {
        this.employees = emps;
      }
    );*/
  }

  deleteEmployee(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.empService.deleteEmployee(id).subscribe(
        emp => {
          console.log(emp);
          this.toaster.success('Deleted Successfully' , 'EMP. Remove');
          this.getemployees();
        }
      );
    }

  }

  updateEmployee(emp: Employee) {
    //this.emp.updateEmployee(emp);
    //this.empService.formData = emp;
    this.empService.formData = Object.assign({} , emp);
  }
}
