import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
   courseName: string = "Angular Full Course";
   courseDuration : string = "2hrs";
   isActive: boolean = true;
   myClassName: string = "bg-success text-white p-2";
   myInputType = "checkbox";

   showAlert() {
    alert("Welcome to angular")
   }
   changeCourseName(name: string){
    this.courseName = name;
   }
   onCityChange(event: any){
    console.log(event.target.value);
    alert("You have selected: " + event.target.value);//property binding
   }
}
