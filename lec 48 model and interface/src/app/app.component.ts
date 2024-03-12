import { Component } from '@angular/core';
interface dataType{
  name:string,
  id :number,
  indian:boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog-app';

  getdata(){
    const data:dataType={
      name:'lavish',
      id:43,
      indian:true
    }
    return data;
  }

}
