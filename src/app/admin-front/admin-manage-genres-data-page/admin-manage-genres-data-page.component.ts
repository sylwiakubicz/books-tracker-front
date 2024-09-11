import { Component } from '@angular/core';
import {AdminAuthorsFormComponent} from "../admin-authors-form/admin-authors-form.component";
import {AdminMenuComponent} from "../admin-menu/admin-menu.component";
import {AdminGenresFormComponent} from "../admin-genres-form/admin-genres-form.component";

@Component({
  selector: 'app-admin-manage-genres-data-page',
  standalone: true,
  imports: [
    AdminAuthorsFormComponent,
    AdminMenuComponent,
    AdminGenresFormComponent
  ],
  templateUrl: './admin-manage-genres-data-page.component.html',
  styles: ``
})
export class AdminManageGenresDataPageComponent {



}
