import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
   courseName: string = "Angular Full Course";
   courseDuration : string = "2hrs";
   isActive: boolean = true;
   myClassName: string = "bg-success text-white p-2";
   myInputType = "checkbox";
   
   selectcityname: string = "Choose City";
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
