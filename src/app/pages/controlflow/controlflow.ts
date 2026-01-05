import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-controlflow',
  imports: [],
  templateUrl: './controlflow.html',
  styleUrls: ['./controlflow.css'],
  standalone: true 
})
export class Controlflow {

  isText: boolean = true;

  isTextVisiable = signal<boolean>(false);

  hideText() {
    this.isTextVisiable.set(false);
  }

  showText() {
    this.isTextVisiable.set(true);
  }

  cityList: string[] = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

}
