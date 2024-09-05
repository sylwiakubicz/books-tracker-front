import { Component } from '@angular/core';
import {AdminBooksTableComponent} from "../admin-books-table/admin-books-table.component";
import {AdminMenuComponent} from "../admin-menu/admin-menu.component";
import {AdminAuthorsTableComponent} from "../admin-authors-table/admin-authors-table.component";

@Component({
  selector: 'app-admin-authors-page',
  standalone: true,
  imports: [
    AdminBooksTableComponent,
    AdminMenuComponent,
    AdminAuthorsTableComponent
  ],
  templateUrl: './admin-authors-page.component.html',
  styles: ``
})
export class AdminAuthorsPageComponent {

}