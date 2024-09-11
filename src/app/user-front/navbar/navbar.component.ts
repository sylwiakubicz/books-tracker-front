import {Component, OnInit} from '@angular/core';
import {SubmitBtnComponent} from "../submit-btn/submit-btn.component";
import {NgClass, NgIf} from "@angular/common";
import {AuthService} from "../../services/AuthService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    SubmitBtnComponent,
    NgClass,
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarComponent implements OnInit{
  openedBool : boolean = false;
  isLoggedIn : boolean = false;

  constructor(private authService : AuthService, private router: Router) {
  }

  ngOnInit() {
    this.authService.GetUserRole().subscribe(role => {
      if (role === null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
      }
    })
  }

  toggleOpenedBool() {this.openedBool = !this.openedBool}

  logout() {
    this.authService.Logout().subscribe({
      next: (response) => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
      }
    });
  }
}
