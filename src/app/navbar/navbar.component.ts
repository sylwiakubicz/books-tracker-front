import { Component } from '@angular/core';
import {SubmitBtnComponent} from "../submit-btn/submit-btn.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    SubmitBtnComponent
  ],
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarComponent {

}
