import { Component } from '@angular/core';
import {LoginFormComponent} from "../login-form/login-form.component";
import {LoginCardComponent} from "../login-card/login-card.component";
import {GalleryCardComponent} from "../gallery-card/gallery-card.component";
import {NavbarComponent} from "../navbar/navbar.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    LoginFormComponent,
    LoginCardComponent,
    GalleryCardComponent,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {

}
