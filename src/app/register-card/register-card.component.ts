import { Component } from '@angular/core';
import {LoginFormComponent} from "../login-form/login-form.component";
import {RegisterFormComponent} from "../register-form/register-form.component";

@Component({
  selector: 'app-register-card',
  standalone: true,
  imports: [
    LoginFormComponent,
    RegisterFormComponent
  ],
  templateUrl: './register-card.component.html',
})
export class RegisterCardComponent {

}
