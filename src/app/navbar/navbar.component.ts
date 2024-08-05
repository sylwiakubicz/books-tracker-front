import { Component } from '@angular/core';
import {SubmitBtnComponent} from "../submit-btn/submit-btn.component";
import {NgClass} from "@angular/common";
import {AuthService} from "../../services/AuthService";
import {Router} from "@angular/router";

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

  constructor(private authService : AuthService, private router: Router) {
  }

  toggleOpenedBool() {this.openedBool = !this.openedBool}

  logout() {
    this.authService.Logout().subscribe({
      next: (response) => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.log(err)
      }
    });
  }
}
