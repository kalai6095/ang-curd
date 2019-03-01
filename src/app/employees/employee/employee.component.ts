import {Component , HostListener , Input , OnInit} from '@angular/core';
import {EmployeeService} from '../../utils/employee.service';
import {NgForm} from '@angular/forms';
import {EmployeeListComponent} from '../employee-list/employee-list.component';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector : 'app-employee' ,
  templateUrl : './employee.component.html' ,
  styleUrls : ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  // @Input() submit: EmployeeListComponent;

  constructor(private empService: EmployeeService ,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.empService.formData = {
      'id' : null ,
      'empcode' : '' ,
      'fullname' : '' ,
      'lastname' : '' ,
      'mobile' : '' ,
      'position' : ''
    };
  }

  onSubmit(form: NgForm) {
    if (form.value.id == null) {
      this.insertNewRecord(form);
    } else {
      this.updateEmpRecord(form);
    }
  }

  //@HostListener('submit')
  updatelist() {
    //this.submit.getemployees();
    this.empService.getEmployees();
  }

  updateEmployee(emp) {

    this.empService.formData = {
      'id' : emp.id ,
      'empcode' : emp.empcode ,
      'fullname' : emp.fullname ,
      'lastname' : emp.lastname ,
      'mobile' : emp.mobile ,
      'position' : emp.position
    };
  }

  updateEmpRecord(form: NgForm) {
    this.empService.updateEmployee(form.value).subscribe(
      emp => {
        console.log(emp);

        this.toastr.success('Updated Successfully' , 'EMP. Alter');
        this.resetForm();
        this.updatelist();
      }
    );
  }

  insertNewRecord(form: NgForm) {

    this.empService.postEmployee(form.value).subscribe(
      data => {
        console.log(data);

        this.toastr.success('Inserted Successfully' , 'EMP. Register');

        this.resetForm();
        this.updatelist();
      }
    );
  }
}
