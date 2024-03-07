import { Component } from '@angular/core';
import {UserdataService} from './services/userdata.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog-app';
  users:any[]=[];
  constructor(private userdata:UserdataService){
    console.warn("userdata",userdata.users());
    this.users=userdata.users();
  }

}
