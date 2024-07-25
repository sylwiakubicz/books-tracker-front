import { Component } from '@angular/core';
import {LoginFormComponent} from "../login-form/login-form.component";

@Component({
  selector: 'app-login-card',
  standalone: true,
  imports: [
    LoginFormComponent
  ],
  templateUrl: './login-card.component.html',
})
export class LoginCardComponent {

}
