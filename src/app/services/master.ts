import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class Master {
  constructor(private http: HttpClient) {}


    getUser(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

    getDept(){
    return this.http.get("https://api.freeprojectapi.com/api/EmployeeApp/GetDepartments");
  }
}
