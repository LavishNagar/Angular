import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog-app';
  data=10;
  updatecomponent(){
    this.data=Math.floor(Math.random()*10);
  }

}