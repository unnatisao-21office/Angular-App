import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  imports: [],
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit  {
  http = inject(HttpClient);
  userList: any[] =[];
  departmentArray: any[]=[];
  ngOnInit(): void {
    this.getUser();
    this.getDept();
  }

  getUser(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
      this.userList = res;
    })
  }

  getDept(){
    this.http.get("https://api.freeprojectapi.com/api/EmployeeApp/GetDepartments").subscribe((res:any)=>{
      this.departmentArray = res;
    });
  }


 }

