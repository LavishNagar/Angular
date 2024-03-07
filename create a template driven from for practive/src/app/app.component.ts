import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  datalist:any[]=[];
  title = 'blog-app';
  funct(item:any){
    console.warn(item);
    this.datalist.push(item);
  }

}
