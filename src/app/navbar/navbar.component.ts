import { Component } from '@angular/core';
import {SubmitBtnComponent} from "../submit-btn/submit-btn.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    SubmitBtnComponent,
    NgClass
  ],
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarComponent {
  openedBool : boolean = false;

  toggleOpenedBool() {this.openedBool = !this.openedBool}


}
