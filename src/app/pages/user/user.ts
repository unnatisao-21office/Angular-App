import { Component, OnInit, inject, signal } from '@angular/core';

import { Master } from '../../services/master';
import { IEmployee } from '../../model/Employee.model';
import { IUser } from '../../model/user.model';
import { IDepartment } from '../../model/deparment.model';
@Component({
  selector: 'app-user',
  imports: [],
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {
  master = inject(Master); //injecting service using inject function
  userList = signal<IUser[]>([]);
  departmentArray = signal<IDepartment[]>([]);
  ngOnInit(): void {
    this.getUser();
    this.getDept();
  }

  getUser() {
    /*this.user.update(currentUser => ({
    ...currentUser, // Copy all existing properties
    firstName: 'Jane' // Overwrite the specific property with the new value
  }))*/
    this.master.getUser().subscribe((res: any) => {
      this.userList.set(res);
    });
  }

  getDept() {
    this.master.getDept().subscribe((res: any) => {
      this.departmentArray.set(res);
    });
  }
}
