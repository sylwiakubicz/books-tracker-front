import { Component } from '@angular/core';
import {AdminAccountsTableComponent} from "../admin-accounts-table/admin-accounts-table.component";
import {AdminMenuComponent} from "../admin-menu/admin-menu.component";
import {AdminBooksTableComponent} from "../admin-books-table/admin-books-table.component";

@Component({
  selector: 'app-admin-books-page',
  standalone: true,
  imports: [
    AdminAccountsTableComponent,
    AdminMenuComponent,
    AdminBooksTableComponent
  ],
  templateUrl: './admin-books-page.component.html',
  styles: ``
})
export class AdminBooksPageComponent {

}