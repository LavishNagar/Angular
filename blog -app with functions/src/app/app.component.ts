import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog-app';
  // alertfunc(name:any,name2:string){
  //   return alert(`This is  ${name} ${name2} alert meassage.`);
  // }
getdata(events:string){
  // console.log("function called by log");
  // console.warn("function called by warning");
  console.log(events)

}


}
