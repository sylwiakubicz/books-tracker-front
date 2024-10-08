import {Component, Input, OnChanges} from '@angular/core';
import {SubmitBtnComponent} from "../submit-btn/submit-btn.component";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faSquareCheck as farSquareCheck} from "@fortawesome/free-regular-svg-icons/faSquareCheck";
import {BookStatesService} from "../../services/BookStatesService";
import {DeleteStatusOptionComponent} from "../delete-status-option/delete-status-option.component";
import {AuthService} from "../../services/AuthService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-status-btn',
  standalone: true,
  imports: [
    SubmitBtnComponent,
    FaIconComponent,
    DeleteStatusOptionComponent
  ],
  templateUrl: './status-btn.component.html',
  styles: ``
})
export class StatusBtnComponent implements OnChanges{
  @Input() status : string | undefined;
  @Input() book_id : number | undefined;
  showStatuses : boolean = false;
  statusText : string = "Want to read"
  protected readonly farSquareCheck = farSquareCheck;

  constructor(private bookStateService : BookStatesService,  private authService : AuthService, private router : Router) {
  }

  ngOnChanges() {
    this.statusText = this.status ? this.status : "Want to read";
  }

  handleShowStatuses() {
    this.showStatuses = !this.showStatuses;
  }

  handleSetStatus(status : string) {
    this.showStatuses = false;
    this.statusText = status;

    this.authService.GetUserRole().subscribe(role => {
      if (role === null) {
        this.router.navigate(['/login']);
      } else {
        if (this.status) {
          this.status = status;
          if (this.book_id) {
            this.updateBookToNewStatus(this.book_id, this.status)
          }
        } else {
          this.status = status;
          if (this.book_id && this.status) {
            this.addBookToNewStatus(this.book_id, this.status)
          }
        }
      }
    })
  }

  addBookToNewStatus(book_id : number, status : string) {
    this.bookStateService.AddBookToStatus(book_id, status , null, null,null, null).subscribe(
      {
        next: (response) => {
          window.location.reload();
        },
        error : (error) => {
        }
      }
    )
  }

  updateBookToNewStatus(book_id : number, status : string) {
    this.bookStateService.UpdateBookToStatus(book_id, status , null, null,null, null).subscribe(
      {
        next: (response) => {
          window.location.reload();
        },
        error : (error) => {
        }
      }
    )
  }

}
