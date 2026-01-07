import { Component, OnInit, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Master } from '../../services/master';
import { IEmployee } from '../../model/Employee.model';
@Component({
  selector: 'app-user',
  imports: [],
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit  {
  http = inject(HttpClient);
  master = inject(Master); //injecting service using inject function
  userList = signal<IEmployee[]>([]);
  departmentArray: any[]=[];
  ngOnInit(): void {
    this.getUser();
    this.getDept();
  
  }

  getUser(){
   
    this.master.getUser().subscribe((res:any)=>{
      this.userList = res;
    });
  }

  getDept(){
    this.master.getDept().subscribe((res:any)=>{
      this.departmentArray = res;
    });
  }


 }

