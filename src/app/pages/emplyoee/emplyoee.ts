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
    if (
      !this.employeeobj().fullName ||
      !this.employeeobj().email ||
      !this.employeeobj().phone ||
      !this.employeeobj().salary ||
      !this.employeeobj().departmentId
    ) {
      alert('Please fill in Name, Email, Phone Number, Salary, and Department');
      return;
    }
    if (!/^[a-zA-Z]+$/.test(this.employeeobj().fullName)) {
      alert('Full Name must contain letters only, no spaces or numbers');
      return;
    }
    if (this.employeeobj().salary < 5000 || this.employeeobj().salary > 100000) {
      alert('Salary must be between 5000 and 100000');
      return;
    }
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
    if (
      !this.employeeobj().fullName ||
      !this.employeeobj().email ||
      !this.employeeobj().phone ||
      !this.employeeobj().salary ||
      !this.employeeobj().departmentId
    ) {
      alert('Please fill in Name, Email, Phone Number, Salary, and Department');
      return;
    }
    if (!/^[a-zA-Z]+$/.test(this.employeeobj().fullName)) {
      alert('Full Name must contain letters only, no spaces or numbers');
      return;
    }
    if (this.employeeobj().salary < 5000 || this.employeeobj().salary > 100000) {
      alert('Salary must be between 5000 and 100000');
      return;
    }
    this.master.updateEmployee(this.employeeobj()).subscribe((res) => {
      alert('Employee Updated Successfully');
      this.getEmployeeData();
      this.resetForm();
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
