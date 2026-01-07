import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Employee } from '../model/Employee.model';
@Injectable({
  providedIn: 'root',
})
export class Master {
  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getDept() {
    return this.http.get('https://api.freeprojectapi.com/api/EmployeeApp/GetDepartments');
  }
  getEmployeeData() {
    return this.http.get<Employee>('https://api.freeprojectapi.com/api/EmployeeApp/GetEmployees');
  }

  saveEmployee(emp: Employee) {
    let payload: any;
    if (emp.employeeId === 0) {
      const { employeeId, ...rest } = emp;
      payload = rest;
    } else {
      payload = emp;
    }
    return this.http.post<Employee>(
      'https://api.freeprojectapi.com/api/EmployeeApp/CreateEmployee',
      payload
    );
  }
  //will add the put api for updating the pre existing employee data
  getDesignationbtDept(deptId: number) {
    return this.http.get(
      `https://api.freeprojectapi.com/api/EmployeeApp/GetDesignationsByDeptId?deptId=${deptId}`
    );
  }
}
