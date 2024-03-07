import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Registration Form';
  registrationform=new FormGroup({
    Firstname:new FormControl(''),
    Lastname:new FormControl(''),
    email:new FormControl(''),
    countryName:new FormControl(''),
    Gender:new FormControl('male')

  })
// data:any[]=[];
callingfunction(){
  console.warn(this.registrationform.value);
  // this.data.push(this.registrationform.value);
  this.registrationform.reset();
}

}
