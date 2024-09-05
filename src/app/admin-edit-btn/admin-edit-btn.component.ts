import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-admin-edit-btn',
  standalone: true,
  imports: [],
  templateUrl: './admin-edit-btn.component.html',
  styles: ``
})
export class AdminEditBtnComponent {

  @Input() id : number = 0;

  handleEdit(id : number) {
    console.log("delete " + id)
  }
}
