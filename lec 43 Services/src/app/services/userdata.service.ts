import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users(){
    return[
      {name:'lavish',age:33,email:'lavish@gmail.com'},
      {name:'peter',age:63,email:'peter@gmail.com'},
      {name:'akash',age:43,email:'akash@gmail.com'},
    ]
  }
}
