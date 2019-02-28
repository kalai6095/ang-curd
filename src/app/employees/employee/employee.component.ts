import {Component , OnInit} from '@angular/core';
import {EmployeeService} from '../../utils/employee.service';
import {NgForm} from '@angular/forms';

@Component({
  selector : 'app-employee' ,
  templateUrl : './employee.component.html' ,
  styleUrls : ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private empService: EmployeeService) {
  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.empService.formData = {
      'id' : 0 ,
      'empcode' : '' ,
      'fullname' : '' ,
      'lastname' : '' ,
      'mobile' : '' ,
      'position' : ''
    };
  }

  onSubmit(form: NgForm) {
    this.inserNewRecord(form);
  }


  inserNewRecord(form: NgForm) {
    this.empService.postEmployee(form.value).subscribe(
      data => {
        console.log(data);
      }
    );
  }
}
