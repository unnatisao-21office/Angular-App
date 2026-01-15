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
  validationErrors = signal<{ [key: string]: string }>({});

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
    const errors: { [key: string]: string } = {};
    
    const trimmedFullName = this.employeeobj().fullName.trim();
    const trimmedEmail = this.employeeobj().email.trim();
    this.employeeobj().fullName = trimmedFullName;
    this.employeeobj().email = trimmedEmail;

    if (!trimmedFullName) {
      errors['fullName'] = 'Full Name is required';
    } else if (!/^[a-zA-Z\s'-]+$/.test(trimmedFullName)) {
      errors['fullName'] = 'Full Name must contain letters only';
    }

    if (!trimmedEmail) {
      errors['email'] = 'Email is required';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(trimmedEmail)) {
      errors['email'] = 'Please enter a valid email address';
    }

    if (!this.employeeobj().phone) {
      errors['phone'] = 'Phone is required';
    }

    if (!this.employeeobj().salary) {
      errors['salary'] = 'Salary is required';
    } else if (this.employeeobj().salary < 5000 || this.employeeobj().salary > 100000) {
      errors['salary'] = 'Salary must be between 5000 and 100000';
    }

    if (!this.employeeobj().departmentId) {
      errors['departmentId'] = 'Department is required';
    }

    if (!this.employeeobj().designationId) {
      errors['designationId'] = 'Designation is required';
    }

    this.validationErrors.set(errors);

    if (Object.keys(errors).length > 0) {
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
    const errors: { [key: string]: string } = {};

    const trimmedFullName = this.employeeobj().fullName.trim();
    const trimmedEmail = this.employeeobj().email.trim();
    this.employeeobj().fullName = trimmedFullName;
    this.employeeobj().email = trimmedEmail;

    if (!trimmedFullName) {
      errors['fullName'] = 'Full Name is required';
    } else if (!/^[a-zA-Z\s'-]+$/.test(trimmedFullName)) {
      errors['fullName'] = 'Full Name must contain letters only';
    }

    if (!trimmedEmail) {
      errors['email'] = 'Email is required';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(trimmedEmail)) {
      errors['email'] = 'Please enter a valid email address';
    }

    if (!this.employeeobj().phone) {
      errors['phone'] = 'Phone is required';
    }

    if (!this.employeeobj().salary) {
      errors['salary'] = 'Salary is required';
    } else if (this.employeeobj().salary < 5000 || this.employeeobj().salary > 100000) {
      errors['salary'] = 'Salary must be between 5000 and 100000';
    }

    if (!this.employeeobj().departmentId) {
      errors['departmentId'] = 'Department is required';
    }

    if (!this.employeeobj().designationId) {
      errors['designationId'] = 'Designation is required';
    }

    this.validationErrors.set(errors);

    if (Object.keys(errors).length > 0) {
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
    this.validationErrors.set({});
  }
}
