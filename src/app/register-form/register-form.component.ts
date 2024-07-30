import { Component } from '@angular/core';
import {SubmitBtnComponent} from "../submit-btn/submit-btn.component";
import {FormsModule} from "@angular/forms";
import {AuthService} from "../../services/AuthService";

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

  constructor(private authService: AuthService,) {
    this.registerObj = new RegisterData();
  }

  register() {
    console.log("Attempting to register...");
    this.authService.Register(this.registerObj.username, this.registerObj.email, this.registerObj.password).subscribe({
      next: (response) => {
        console.log("Registered successfully", response);
      },
      error: (err) => {
        console.error("Registration error", err);
      }
    });
  }

  handleSignUp() {
    this.register()
  }
}

export class RegisterData {
  username : string;
  email : string;
  password : string;

  constructor() {
    this.username = '';
    this.email = '';
    this.password = '';
  }
}
