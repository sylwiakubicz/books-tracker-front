import { Component } from '@angular/core';
import {SubmitBtnComponent} from "../submit-btn/submit-btn.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    SubmitBtnComponent,
    FormsModule
  ],
  templateUrl: './register-form.component.html',
})
export class RegisterFormComponent {
  registerObj : RegisterData;

  constructor() {
    this.registerObj = new RegisterData();
  }

  handleSignUp() {
    console.log(this.registerObj)
    console.log("sign up button clicked")
  }
}

export class RegisterData {
  username : String;
  email : String;
  password : String;

  constructor() {
    this.username = '';
    this.email = '';
    this.password = '';
  }
}
