import { Component } from '@angular/core';
import {UserdataService} from './services/userdata.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog-app';
  userss:any[]=[];
  constructor(private userdata:UserdataService){
    console.warn("userdata",userdata.users());
    this.userss=userdata.users();
  }

}
