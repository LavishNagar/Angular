import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Todo List App';
  list:any[]=[];
  getdata(data: string) {
    this.list.push({id:this.list.length,name:data});
    console.log(this.list);
    
  }
  remove(id:number){
  this.list=this.list.filter(item=>item.id!==id);

  }
}
