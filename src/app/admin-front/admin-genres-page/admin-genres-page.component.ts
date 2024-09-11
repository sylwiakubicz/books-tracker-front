import { Component } from '@angular/core';
import {AdminAuthorsTableComponent} from "../admin-authors-table/admin-authors-table.component";
import {AdminMenuComponent} from "../admin-menu/admin-menu.component";
import {RouterLink} from "@angular/router";
import {AdminGenresTableComponent} from "../admin-genres-table/admin-genres-table.component";

@Component({
  selector: 'app-admin-genres-page',
  standalone: true,
  imports: [
    AdminAuthorsTableComponent,
    AdminMenuComponent,
    RouterLink,
    AdminGenresTableComponent
  ],
  templateUrl: './admin-genres-page.component.html',
  styles: ``
})
export class AdminGenresPageComponent {

}
