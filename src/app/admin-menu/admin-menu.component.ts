import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faBookOpen, faLock, faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {AuthService} from "../../services/AuthService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-menu',
  standalone: true,
  imports: [
    NgClass,
    FaIconComponent
  ],
  templateUrl: './admin-menu.component.html',
  styles: ``
})
export class AdminMenuComponent {

  constructor(private authService : AuthService, private router : Router) {
  }
  @Input() isShow : Boolean = false;
  @Input() activeSection : string = 'accounts';
  @Input() activeLibrarySection : string = 'books'

  handleClick(active : string, libraryActive : string) {
    this.toggleDropdown(active)
    this.handleActiveSection(active)
    this.handleActiveLibrarySection(libraryActive)
    let url : string = "/admin/" + active
    if (active === 'library') {
      url += ('/' + this.activeLibrarySection)
    }
    this.router.navigate([url])
  }

  toggleDropdown(active : string) {
    if (this.activeSection === active) {
      return
    }
    this.isShow = !this.isShow;
  }

  handleActiveSection(active : string) {
    this.activeSection = active
  }

  handleActiveLibrarySection(active : string) {
    this.activeLibrarySection = active
  }

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

  protected readonly faUserCircle = faUserCircle;
  protected readonly faBookOpen = faBookOpen;
  protected readonly faLock = faLock;
}
