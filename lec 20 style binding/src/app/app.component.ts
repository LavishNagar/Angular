import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog-app';

  color='blue';
  bg='green';
 update(){
  this.color='red';
  this.bg='yellow';
 }

}
