import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Counter Increment and Decrement';
  count=0;
  counter(type:string){
  // type==='add'?this.count++:this.count--
  if(type==='add'){
    this.count++;
  }
  else{
    this.count--;
  }
  

  }
}
