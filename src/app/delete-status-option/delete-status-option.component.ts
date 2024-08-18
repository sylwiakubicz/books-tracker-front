import {Component, Input} from '@angular/core';
import {BookStatesService} from "../../services/BookStatesService";

@Component({
  selector: 'app-delete-status-option',
  standalone: true,
  imports: [],
  templateUrl: './delete-status-option.component.html',
  styles: ``
})
export class DeleteStatusOptionComponent {
  @Input() book_id : number = 0;

  constructor(private bookStatesService : BookStatesService) {
  }

  deleteFromStatus() {
    this.bookStatesService.DeleteBookState(this.book_id).subscribe(() => window.location.reload())
  }

}
