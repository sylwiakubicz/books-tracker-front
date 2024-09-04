import { Component } from '@angular/core';
import {AdminMenuComponent} from "../admin-menu/admin-menu.component";
import {AdminBooksFormComponent} from "../admin-books-form/admin-books-form.component";
import {AdminAuthorsTableComponent} from "../admin-authors-table/admin-authors-table.component";
import {AdminAccountsTableComponent} from "../admin-accounts-table/admin-accounts-table.component";

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [
    AdminMenuComponent,
    AdminBooksFormComponent,
    AdminAuthorsTableComponent,
    AdminAccountsTableComponent
  ],
  templateUrl: './admin-accounts-page.component.html',
  styles: ``
})
export class AdminAccountsPageComponent {

}
