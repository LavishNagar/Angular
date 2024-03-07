import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent {
  @ Input() item:{name:string,email:string}={name:'',email:''};

}
