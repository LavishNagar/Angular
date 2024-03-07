import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'blog-app';
  loginformy=new FormGroup({
  user:new FormControl('',[Validators.required]),
  password:new FormControl('')
})

loginuser(){
  console.warn(this.loginformy.value)
}

get uservalidator(){
  return this.loginformy.get('user')
}
}
