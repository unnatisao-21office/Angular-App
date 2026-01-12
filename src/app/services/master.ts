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
    return this.http.get<IDepartment[]>(
      'https://api.freeprojectapi.com/api/EmployeeApp/GetDepartments'
    );
  }
  getEmployeeData() {
    return this.http.get<IEmployee[]>(
      'https://api.freeprojectapi.com/api/EmployeeApp/GetEmployees'
    );
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
    return this.http.get<IDesignation[]>(
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
    return this.http.get<IEmployee>(`https://api.freeprojectapi.com/api/EmployeeApp/${empid}`);
  }
}
