import { Component } from '@angular/core';
import {SubmitBtnComponent} from "../submit-btn/submit-btn.component";
import {FormInputComponent} from "../form-input/form-input.component";

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    SubmitBtnComponent,
    FormInputComponent
  ],
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  handleSignIn() {
    console.log('Sign In button clicked');
  }
}
