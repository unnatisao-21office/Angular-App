import { Component, OnInit, inject, signal } from '@angular/core';
import { IEmployee } from '../model/Employee.model';
import { Employee } from '../model/Employee.model';
import { ReactiveFormsModule } from '@angular/forms';
import { Master } from '../services/master';
import { IDepartment } from '../model/deparment.model';
import { IDesignation } from '../model/designation.model';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-user-reactive',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './user-reactive.html',
  styleUrl: './user-reactive.css',
})
export class UserReactive implements OnInit {
  master = inject(Master);
  employeeList = signal<IEmployee[]>([]);
  isEditMode = signal<boolean>(false);
  //employeeobj = signal<Employee>(new Employee()); //class object

  employeeForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    //employeeId: new FormControl(0),
    fullName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    gender: new FormControl(''),
    dateOfJoining: new FormControl(''),
    departmentId: new FormControl(0),
    designationId: new FormControl(0),
    employeeType: new FormControl(''),
    salary: new FormControl(0),
  });

  departmentArray = signal<IDepartment[]>([]);
  designationArray = signal<IDesignation[]>([]);

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
    const formValue = this.employeeForm.value;
    this.master.saveEmployee(formValue).subscribe((res) => {
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
    const formValue = this.employeeForm.value;
    this.master.onedit(empid).subscribe((res: any) => {
      this.employeeForm.setValue(res);
      this.getDesignationbtDept();
      this.isEditMode.set(true);
    });
  }
  onDelete(empid: string) { 
    this.deleteEmployee(empid);
  }

  getDesignationbtDept() {
    //fetch designations based on department
    const formValue = this.employeeForm.value;
    this.master.getDesignationbtDept(formValue.departmentId).subscribe((res: any) => {
      console.log(res);
      this.designationArray.set(res);
    });
  }
  updateEmployee() {
    const formValue = this.employeeForm.value;
    this.master.saveEmployee(formValue).subscribe((res) => {
      alert('Employee Updated Successfully');
      this.getEmployeeData();
      this.resetForm();
    });
  }
  deleteEmployee(empid :string){
    this.master.deleteEmployee(empid).subscribe((res) => {
      alert('Employee Deleted Successfully');
      this.getEmployeeData();
      this.resetForm();
    });
  }

  resetForm() {
    this.employeeForm.reset({
      id: '',
      fullName: '',
      email: '',
      phone: '',
      gender: '',
      dateOfJoining: '',
      departmentId: 0,
      designationId: 0,
      employeeType: '',
      salary: 0,
    });
    this.designationArray.set([]);
    this.isEditMode.set(false);
  }
  }

