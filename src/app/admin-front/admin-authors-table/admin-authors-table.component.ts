import { Component } from '@angular/core';
import {AdminEditBtnComponent} from "../admin-edit-btn/admin-edit-btn.component";
import {AdminDeleteBtnComponent} from "../admin-delete-btn/admin-delete-btn.component";

@Component({
  selector: 'app-admin-authors-table',
  standalone: true,
  imports: [
    AdminEditBtnComponent,
    AdminDeleteBtnComponent
  ],
  templateUrl: './admin-authors-table.component.html',
  styles: ``
})
export class AdminAuthorsTableComponent {

}
