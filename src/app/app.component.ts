import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginPageComponent, FontAwesomeModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
}
