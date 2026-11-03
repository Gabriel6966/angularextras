import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  logOutEmpleado(): void{
    localStorage.removeItem('TOKEN');
  }

  protected readonly title = signal('angularextras');
}
