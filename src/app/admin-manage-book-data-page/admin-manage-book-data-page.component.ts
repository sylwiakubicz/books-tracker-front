import { Component } from '@angular/core';
import {AdminBooksTableComponent} from "../admin-books-table/admin-books-table.component";
import {AdminMenuComponent} from "../admin-menu/admin-menu.component";
import {AdminBooksFormComponent} from "../admin-books-form/admin-books-form.component";

@Component({
  selector: 'app-admin-manage-book-data-page',
  standalone: true,
  imports: [
    AdminBooksTableComponent,
    AdminMenuComponent,
    AdminBooksFormComponent
  ],
  templateUrl: './admin-manage-book-data-page.component.html',
  styles: ``
})
export class AdminManageBookDataPageComponent {

}
