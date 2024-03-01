import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog-app';
  // color='blue';


  //for loop
  users=['Anil','lavish','vikash','rajesh','nitin'];
  //for many data
  userDetails=[
    {name:'Anil',email:'Anil@mail', phone:'65343'},
    {name:'vikash',email:'vikash@mail', phone:'8865343'},
    {name:'lavish',email:'lavish@mail', phone:'9865343'},
    {name:'kasis',email:'kasisl@mail', phone:'99965343'},
  ]
}
