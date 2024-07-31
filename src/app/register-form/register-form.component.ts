import { Component } from '@angular/core';
import {SubmitBtnComponent} from "../submit-btn/submit-btn.component";
import {FormsModule} from "@angular/forms";
import {AuthService} from "../../services/AuthService";
import {NgIf} from "@angular/common";
import {ErrorDisplayComponent} from "../error-display/error-display.component";

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    SubmitBtnComponent,
    FormsModule,
    NgIf,
    ErrorDisplayComponent
  ],
  templateUrl: './register-form.component.html',
})

export class RegisterFormComponent {
  registerObj : RegisterData;
  error: string | null = null;

  constructor(private authService: AuthService,) {
    this.registerObj = new RegisterData();
  }

  register() {
    this.authService.Register(this.registerObj.username, this.registerObj.email, this.registerObj.password).subscribe({
      next: (response) => {
        this.error = null;
      },
      error: (err) => {
        this.error = err.error.message.split(",",1);
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
