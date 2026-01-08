export interface IEmployee{
  employeeId: number;
  fullName: string;
  email: string;
  phone: string;
  gender: string;
  dateOfJoining: string;
  departmentId: number;
  designationId: number;
  employeeType: string;
  salary: number
}

export class Employee{
 employeeId: number;
  fullName: string;
  email: string;
  phone: string;
  gender: string;
  dateOfJoining: string;
  departmentId: number;
  designationId: number;
  employeeType: string;
  salary: number;

  constructor(){
    this.employeeId = 0;
    this.fullName = '';
    this.email = '';
    this.phone = '';
    this.gender = '';
    this.dateOfJoining = '';
    this.departmentId = 0;
    this.designationId = 0;
    this.employeeType = '';
    this.salary = 0;
  }
}