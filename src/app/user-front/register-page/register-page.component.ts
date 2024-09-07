import { Component } from '@angular/core';
import {GalleryCardComponent} from "../gallery-card/gallery-card.component";
import {LoginCardComponent} from "../login-card/login-card.component";
import {RegisterCardComponent} from "../register-card/register-card.component";
import {FooterComponent} from "../footer/footer.component";
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    GalleryCardComponent,
    LoginCardComponent,
    RegisterCardComponent,
    FooterComponent,
    NavbarComponent
  ],
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {

}
