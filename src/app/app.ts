import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { User } from './pages/user/user';
import { DataBinding } from './pages/data-binding/data-binding';
import { Controlflow } from './pages/controlflow/controlflow';

@Component({
  selector: 'app-root',
  imports: [User,DataBinding,RouterLink,RouterOutlet,Controlflow],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,


})
export class App {
 
}
