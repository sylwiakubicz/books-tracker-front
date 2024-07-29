import { Component } from '@angular/core';
import {FormInputComponent} from "../form-input/form-input.component";
import {SubmitBtnComponent} from "../submit-btn/submit-btn.component";

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    FormInputComponent,
    SubmitBtnComponent
  ],
  templateUrl: './register-form.component.html',
})
export class RegisterFormComponent {

  handleSignUp() {
    console.log("sign up")
  }
}
