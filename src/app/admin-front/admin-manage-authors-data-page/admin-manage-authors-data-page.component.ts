import { Component } from '@angular/core';
import {AdminBooksFormComponent} from "../admin-books-form/admin-books-form.component";
import {AdminMenuComponent} from "../admin-menu/admin-menu.component";
import {AdminAuthorsFormComponent} from "../admin-authors-form/admin-authors-form.component";

@Component({
  selector: 'app-admin-manage-authors-data-page',
  standalone: true,
  imports: [
    AdminBooksFormComponent,
    AdminMenuComponent,
    AdminAuthorsFormComponent
  ],
  templateUrl: './admin-manage-authors-data-page.component.html',
  styles: ``
})
export class AdminManageAuthorsDataPageComponent {

}
