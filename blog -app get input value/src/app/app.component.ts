import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  valueofinput:string='';
  title = 'blog-app';
  getdata(value:string){
    console.log(`value is ${value}`);
    this.valueofinput=(value);
    
  }

}
