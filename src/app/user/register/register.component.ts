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
  email = new FormControl('', [
    Validators.required,
    Validators.email
  ])
  age = new FormControl('', [
    Validators.required,
    Validators.min(16)
  ])
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  ])
  confirm_password = new FormControl('', [
    Validators.required
  ])
  phoneNumber = new FormControl('',[
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(13)
  ])

  registerForm = new FormGroup({
    name: this.name,
    age: this.age,
    email: this.email,
    password: this.password,
    confirm_password: this.confirm_password,
    // phoneNumber:this.phoneNumber
  })

  showAlert = false
  alertMsg = 'Please Wait! You account is being created....'
  alertColor = 'blue'

  register(){
    // console.log("registered!!")
    this.showAlert = true
    this.alertMsg = 'Please Wait! You account is being created....'
    this.alertColor = 'blue'
  }

  // constructor() {
  //   this.name
  // }
}
