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
    if (emp.employeeId === 0) {
      const { employeeId, ...rest } = emp;
      return this.http.post<Employee>(
        'https://api.freeprojectapi.com/api/EmployeeApp/CreateEmployee',
        rest
      );
    }
    return this.http.put<Employee>(
      'https://api.freeprojectapi.com/api/EmployeeApp/UpdateEmployee',
      emp
    );
  }
  getDesignationbtDept(deptId: number) {
    return this.http.get(
      `https://api.freeprojectapi.com/api/EmployeeApp/GetDesignationsByDeptId?deptId=${deptId}`
    );
  }
  updateEmployee(emp: Employee) {
    return this.http.put<Employee>(
      'https://api.freeprojectapi.com/api/EmployeeApp/UpdateEmployee',
      emp
    );
  }
  onedit(empid: number) {
    return this.http.get(`https://api.freeprojectapi.com/api/EmployeeApp/${empid}`);
  }
}


