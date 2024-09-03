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

  toggleDropdown() {
    this.isShow = !this.isShow;
  }

  protected readonly faUserCircle = faUserCircle;
  protected readonly faBookOpen = faBookOpen;
}
