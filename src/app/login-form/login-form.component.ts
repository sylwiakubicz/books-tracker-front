import {Component} from '@angular/core';
import {SubmitBtnComponent} from "../submit-btn/submit-btn.component";
import {FormsModule} from "@angular/forms";
import {AuthService} from "../../services/AuthService";
import {Router} from "@angular/router";
import {ErrorDisplayComponent} from "../error-display/error-display.component";


@Component({
  imports: [
    SubmitBtnComponent,
    FormsModule,
    ErrorDisplayComponent
  ],
  selector: 'app-login-form',
  standalone: true,
  templateUrl: './login-form.component.html'
})

export class LoginFormComponent {
  loginObj: LoginData;
  error: string | null = null;

  constructor(private authService: AuthService, private router: Router) {
    this.loginObj = new LoginData();
  }

  login() {
    this.authService.Login(this.loginObj.username, this.loginObj.password).subscribe({
      next: (response) => {
        this.error = null;
        this.router.navigate(['/']); // Navigate to home or another route on successful login
      },
      error: (err) => {
        this.error = err.error.message;
      }
    });
  }

  handleSignIn() {
    console.log(this.loginObj);
    console.log('Sign In button clicked');
    this.login();
  }
}

export class LoginData {
  username: string;
  password: string;

  constructor() {
    this.username = '';
    this.password = '';
  }
}
