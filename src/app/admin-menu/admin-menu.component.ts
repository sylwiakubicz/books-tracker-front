import { Component } from '@angular/core';
import {NgClass} from "@angular/common";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faBookOpen, faUserCircle} from "@fortawesome/free-solid-svg-icons";

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
  isShow : Boolean = false;
  activeSection : string = 'accounts';
  activeLibrarySection : string = 'books'

  handleClick(active : string) {
    this.toggleDropdown(active)
    this.handleActiveSection(active)
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

  protected readonly faUserCircle = faUserCircle;
  protected readonly faBookOpen = faBookOpen;
}
