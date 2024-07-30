import {Component} from '@angular/core';
import {SubmitBtnComponent} from "../submit-btn/submit-btn.component";
import {FormsModule} from "@angular/forms";


@Component({
  imports: [
    SubmitBtnComponent,
    FormsModule
  ],
  selector: 'app-login-form',
  standalone: true,
  templateUrl: './login-form.component.html'
})

export class LoginFormComponent {
  loginObj : LoginData;

  constructor() {
    this.loginObj = new LoginData();
  }

  handleSignIn() {
    console.log(this.loginObj)
    console.log('Sign In button clicked');
  }
}

export class LoginData {
  username: String;
  password : String;

  constructor() {
    this.username = '';
    this.password = '';
  }
}
