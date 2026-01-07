import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject, signal } from '@angular/core';
import { IEmployee } from '../../model/Employee.model';
import { Employee } from '../../model/Employee.model';
import { FormsModule } from '@angular/forms';
import { Master } from '../../services/master';
import { IDepartment } from '../../model/deparment.model';
import { IDesignation } from '../../model/designation.model';
@Component({
  selector: 'app-emplyoee',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './emplyoee.html',
  styleUrl: './emplyoee.css',
})
export class Emplyoee implements OnInit {
  http = inject(HttpClient);
  master = inject(Master);
  employeeList = signal<IEmployee[]>([]);
  employeeobj = signal<Employee>(new Employee()); //class object
  departmentArray=signal<IDepartment[]>([]);
  designationArray=signal<IDesignation[]>([]);
  apiurl: string = 'https://api.freeprojectapi.com/api/EmployeeApp';
  ngOnInit(): void {
    this.getEmployeeData();
    this.getDept();
  }

  getEmployeeData() {
    this.master.getEmployeeData().subscribe((res: any) => {
      this.employeeList.set(res);
    });
  }

  saveEmployee() {
   this.master.saveEmployee(this.employeeobj()).subscribe(res => {
     alert('Employee Saved Successfully');
      this.getEmployeeData();
   });
  }

  getDept() {
    this.master.getDept().subscribe((res: any) => {
      this.departmentArray.set(res);
    });
  }

  onEdit(empid: number) {
    this.http.get(this.apiurl + `/${empid}`).subscribe((res: any) => {
      this.employeeobj.set(res);
    });
  }

  getDesignationbtDept() {
    //fetch designations based on department
    this.master.getDesignationbtDept(this.employeeobj().departmentId).subscribe((res: any) => {
      console.log(res);
      this.designationArray.set(res);
    });
  }
}
