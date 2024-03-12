import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Registration Form';
  registrationform=new FormGroup({
    Firstname:new FormControl('',[Validators.required]),
    Lastname:new FormControl(''),
    email:new FormControl('',[Validators.email]),
    countryName:new FormControl(''),
    Gender:new FormControl('male')

  })
data:any[]=[];
callingfunction(){
  // this.registrationform.reset();
  console.warn(this.registrationform.value);

  this.data.push(this.registrationform.value);

  
}

get firstnamevalid(){
  return this.registrationform.get('Firstname');
}


}
