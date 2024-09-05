import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-admin-delete-btn',
  standalone: true,
  imports: [],
  templateUrl: './admin-delete-btn.component.html',
  styles: ``
})
export class AdminDeleteBtnComponent {

  @Input() id : number = 0;

  handleDelete(id : number) {
    console.log("delete " + id)
  }

}
