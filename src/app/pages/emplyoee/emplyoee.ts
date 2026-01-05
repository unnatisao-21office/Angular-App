import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,inject } from '@angular/core';
import { IEmployee } from '../../model/Employee.model';
import { Employee } from '../../model/Employee.model';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-emplyoee',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './emplyoee.html',
  styleUrl: './emplyoee.css',
})
export class Emplyoee implements OnInit{
http = inject(HttpClient);
employeeList: IEmployee[] = [];
employeeobj : Employee = new Employee();  //class object

ngOnInit(): void {
  this.getEmployeeData();
}

getEmployeeData(){
  this.http.get("https://api.freeprojectapi.com/api/EmployeeApp/GetEmployees").subscribe((res:any)=>{
    this.employeeList = res;
  });

}

saveEmployee(){
 this.http.post<Employee>("https://api.freeprojectapi.com/api/EmployeeApp/CreateEmployee",this.employeeobj).subscribe((res:Employee)=>{
 this.getEmployeeData();
 alert("Employee Saved Successfully");
 });
}
}
