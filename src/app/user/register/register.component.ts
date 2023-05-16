import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  name = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ])
  email = new FormControl('',[
    Validators.required,
    Validators.email
  ])
  age = new FormControl('',[
    Validators.required,
    Validators.min(16)
  ])
  password = new FormControl('')
  confirm_password = new FormControl('')
  phoneNumber = new FormControl('')

  registerForm = new FormGroup({
    name:this.name,
    age:this.age,
    email:this.email,
    password:this.password,
    confirm_password:this.confirm_password
  })

  // constructor() {
  //   this.name
  // }
}
