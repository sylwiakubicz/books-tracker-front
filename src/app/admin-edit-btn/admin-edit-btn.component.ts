import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-admin-edit-btn',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './admin-edit-btn.component.html',
  styles: ``
})
export class AdminEditBtnComponent {

  @Input() id : number = 0;
  @Input() url : string = '/admin/accounts/'
}
