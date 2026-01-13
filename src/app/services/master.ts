import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee, IEmployee } from '../model/Employee.model';
import { IDepartment } from '../model/deparment.model';
import { IDesignation } from '../model/designation.model';
import { IUser } from '../model/user.model';
@Injectable({
  providedIn: 'root',
})
export class Master {
  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }

  getDept() {
    return this.http.get<IDepartment[]>('http://localhost:3000/departments');
  }
  getEmployeeData() {
    return this.http.get<IEmployee[]>('http://localhost:3000/employee');
  }

  saveEmployee(emp: Employee) {
    if (emp.id === '') {
      const { id, ...rest } = emp;
      return this.http.post<Employee>('http://localhost:3000/employee', rest);
    }
    return this.http.put<Employee>(`http://localhost:3000/employee/${emp.id}`, emp);
  }
  getDesignationbtDept(deptId: number) {
    return this.http.get<IDesignation[]>(
      `http://localhost:3000/designations?departmentId=${deptId}`
    );
  }
  updateEmployee(emp: Employee) {
    return this.http.put<Employee>(
      `http://localhost:3000/employee/${emp.id}`,
      emp
    );
  }
  onedit(empid: string) {
    return this.http.get<IEmployee>(`http://localhost:3000/employee/${empid}`);
  }
  deleteEmployee(empid: string) {
    return this.http.delete<void>(`http://localhost:3000/employee/${empid}`);
  }
}
