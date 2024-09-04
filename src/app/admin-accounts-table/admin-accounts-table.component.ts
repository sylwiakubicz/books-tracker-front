import { Component } from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-admin-accounts-table',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './admin-accounts-table.component.html',
  styles: ``
})
export class AdminAccountsTableComponent {

  activeFilter : string = 'all'

}
