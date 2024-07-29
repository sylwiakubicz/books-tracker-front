import { Component } from '@angular/core';
import {GalleryCardComponent} from "../gallery-card/gallery-card.component";
import {LoginCardComponent} from "../login-card/login-card.component";
import {RegisterCardComponent} from "../register-card/register-card.component";

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    GalleryCardComponent,
    LoginCardComponent,
    RegisterCardComponent
  ],
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {

}
