import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog-app';
//  name ='lavish';//property binding
//   list=['a,','b','c','d'];
  //create a todo list 
  list:any[]=[];
  getdata(data:string){
    console.log(this.list);
    this.list.push({id:this.list.length,name:data});
  }


  


}

// //unknown
// let ntsure:unknown=4;
// console.log(ntsure);
