import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {SubmitBtnComponent} from "../submit-btn/submit-btn.component";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faSquareCheck as farSquareCheck} from "@fortawesome/free-regular-svg-icons/faSquareCheck";
import {BookStatesService} from "../../services/BookStatesService";

@Component({
  selector: 'app-status-btn',
  standalone: true,
  imports: [
    SubmitBtnComponent,
    FaIconComponent
  ],
  templateUrl: './status-btn.component.html',
  styles: ``
})
export class StatusBtnComponent implements OnInit{
  @Input() status : string | undefined;
  @Input() book_id : number | undefined;
  statusText: string = "Want to read";
  showStatuses : boolean = false;

  protected readonly farSquareCheck = farSquareCheck;
  constructor(private bookStateService : BookStatesService) {
  }

  ngOnInit() {
    if (this.status) {
      if (this.status == 'want to read') {
        this.statusText = "Want to read";
      }
      if (this.status == 'in progress') {
        this.statusText = "Currently reading"
      }
      if (this.status == 'read') {
        this.statusText = "Read";
      }
    }
  }

  handleShowStatuses() {
    this.showStatuses = !this.showStatuses;
  }

  handleSetStatus(status : string) {
    this.statusText = status;
    this.showStatuses = false;

    if (status == "Want to read") {
      this.status = 'to read'
    }
    if (status == "Currently reading"){
      this.status = 'in progress'
    }
    if (status == 'Read') {
      this.status = 'read'
    }

    if (this.book_id && this.status) {
      this.addBookToNewStatus(this.book_id, this.status)
    }
  }

  addBookToNewStatus(book_id : number, status : string) {
    this.bookStateService.AddBookToStatus(book_id, status , null, null,null, null).subscribe(
      {
        next: (response) => {
          console.log(response)
          window.location.reload();
        },
        error : (error) => {
          console.log(error)
        }
      }
    )
  }
}
