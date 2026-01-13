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
  master = inject(Master);
  employeeList = signal<IEmployee[]>([]);
  employeeobj = signal<Employee>(new Employee()); //class object
  departmentArray = signal<IDepartment[]>([]);
  designationArray = signal<IDesignation[]>([]);
  isEditMode = signal<boolean>(false);

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
    this.master.saveEmployee(this.employeeobj()).subscribe((res) => {
      alert('Employee Saved Successfully');
      this.getEmployeeData();
      this.resetForm();
    });
  }

  getDept() {
    this.master.getDept().subscribe((res: any) => {
      this.departmentArray.set(res);
    });
  }

  onEdit(empid: string) {
    this.master.onedit(empid).subscribe((res: any) => {
      this.employeeobj.set(res);
      this.getDesignationbtDept();
      this.isEditMode.set(true);
    });
  }

  getDesignationbtDept() {
    //fetch designations based on department
    this.master.getDesignationbtDept(this.employeeobj().departmentId).subscribe((res: any) => {
      console.log(res);
      this.designationArray.set(res);
    });
  }
  updateEmployee() {
    this.master.updateEmployee(this.employeeobj()).subscribe((res) => {
      alert('Employee Updated Successfully');
      this.getEmployeeData();
    });
  }
  deleteEmployee(empid: string) {
    this.master.deleteEmployee(empid).subscribe((res) => {
      alert('Employee Deleted Successfully');
      this.getEmployeeData();
      this.resetForm();
    });
  }
  resetForm() {
    
    this.employeeobj.set(new Employee());
    this.designationArray.set([]);
    this.isEditMode.set(false);
  }
}
