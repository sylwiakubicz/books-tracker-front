import { Component } from '@angular/core';
import {NgClass} from "@angular/common";
import {AdminEditBtnComponent} from "../admin-edit-btn/admin-edit-btn.component";
import {AdminDeleteBtnComponent} from "../admin-delete-btn/admin-delete-btn.component";

@Component({
  selector: 'app-admin-accounts-table',
  standalone: true,
  imports: [
    NgClass,
    AdminEditBtnComponent,
    AdminDeleteBtnComponent
  ],
  templateUrl: './admin-accounts-table.component.html',
  styles: ``
})
export class AdminAccountsTableComponent {

  activeFilter : string = 'all'

}
