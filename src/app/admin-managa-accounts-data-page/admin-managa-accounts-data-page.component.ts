import { Component } from '@angular/core';
import {AdminBooksFormComponent} from "../admin-books-form/admin-books-form.component";
import {AdminMenuComponent} from "../admin-menu/admin-menu.component";
import {AdminAccountsFormComponent} from "../admin-accounts-form/admin-accounts-form.component";

@Component({
  selector: 'app-admin-managa-accounts-data-page',
  standalone: true,
  imports: [
    AdminBooksFormComponent,
    AdminMenuComponent,
    AdminAccountsFormComponent
  ],
  templateUrl: './admin-managa-accounts-data-page.component.html',
  styles: ``
})
export class AdminManagaAccountsDataPageComponent {

}
