import { Component } from '@angular/core';
import {LoginFormComponent} from "../login-form/login-form.component";
import {LoginCardComponent} from "../login-card/login-card.component";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    LoginFormComponent,
    LoginCardComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
