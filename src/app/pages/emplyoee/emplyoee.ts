import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,inject , signal} from '@angular/core';

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

employeeList = signal<IEmployee[]>([]);
employeeobj : Employee = new Employee();  //class object
apiurl : string = "https://api.freeprojectapi.com/api/EmployeeApp";
ngOnInit(): void {
  
      this.getEmployeeData();
    
}

  getEmployeeData() {
    this.http
      .get<IEmployee[]>(
        'https://api.freeprojectapi.com/api/EmployeeApp/GetEmployees'
      )
      .subscribe((res) => {
        this.employeeList.set(res);
      });
  }

saveEmployee() {
    this.http
      .post<Employee>(
        'https://api.freeprojectapi.com/api/EmployeeApp/CreateEmployee',
        this.employeeobj
      )
      .subscribe(() => {
        alert('Employee Saved Successfully');
        this.employeeobj = new Employee();
        this.getEmployeeData();
      });
  }

onEdit(empid : number){
  
  this.http.get(this.apiurl + empid).subscribe((res:any)=>{
    this.employeeobj = res;
  });
}
}
