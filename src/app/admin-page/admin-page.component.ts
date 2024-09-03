import { Component } from '@angular/core';
import {AdminMenuComponent} from "../admin-menu/admin-menu.component";

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [
    AdminMenuComponent
  ],
  templateUrl: './admin-page.component.html',
  styles: ``
})
export class AdminPageComponent {

}
