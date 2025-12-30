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
}
