import {Component, Input} from '@angular/core';
import {StarRatingComponent} from "../star-rating/star-rating.component";
import {StatusBtnComponent} from "../status-btn/status-btn.component";
import { DatePipe } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {BookStatesService} from "../../services/BookStatesService";

@Component({
  selector: 'app-book-state-details',
  standalone: true,
  imports: [
    StarRatingComponent,
    StatusBtnComponent,
    FormsModule,
    DatePipe
  ],
  templateUrl: './book-state-details.component.html',
  styleUrl: `./book-state-details.component.css`
})
export class BookStateDetailsComponent {
  @Input() totalPageNumber : number | undefined;
  @Input() startDate : Date | undefined;
  @Input() endDate : Date | undefined;
  @Input() currentPage : number | undefined;
  @Input() book_id : number | undefined;
  @Input() status : string | undefined;
  hideSaveBtn : boolean = true;

  constructor(private bookStateService : BookStatesService) {
  }

  onCurrentPageChange(newVal : number) {
    this.hideSaveBtn = false;
    if (newVal < 0) {
      this.currentPage = 0;
      return;
    }
    if( this.totalPageNumber ) {
      if (newVal > this.totalPageNumber) {
        this.currentPage = this.totalPageNumber;
        return;
      }
    }
    this.currentPage = newVal;
  }

  onEndDateChange(newVal : Date) {
    this.hideSaveBtn = false;
    this.endDate = newVal;
  }
  onStartDateChange(newVal : Date) {
    this.hideSaveBtn = false;
    this.startDate = newVal;
  }

  saveData() {
    if (this.endDate != null) {
      this.status = "Read"
    }
    else if (this.startDate != null && this.endDate == null) {
      this.status = "Currently reading"
    }
    else {
      this.status = "Want to read"
    }
    if (this.book_id && this.status) {
      this.updateBookToNewStatus(this.book_id, this.status, this.currentPage ? this.currentPage : null, this.startDate ? this.startDate : null, this.endDate ? this.endDate : null)
    }
    this.hideSaveBtn = true;

  }

  updateBookToNewStatus(book_id : number, status : string, currentPage : number | null, startDate : Date | null, endDate : Date | null) {
    this.bookStateService.UpdateBookToStatus(book_id, status , null, currentPage,startDate, endDate).subscribe(
      {
        next: (response) => {
          window.location.reload();
        },
        error : (error) => {
          console.log(error)
        }
      }
    )
  }
}
