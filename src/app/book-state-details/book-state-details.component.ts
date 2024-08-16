import {Component, Input} from '@angular/core';
import {StarRatingComponent} from "../star-rating/star-rating.component";
import {StatusBtnComponent} from "../status-btn/status-btn.component";
import { DatePipe } from '@angular/common';
import {FormsModule} from "@angular/forms";

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
  hideSaveBtn : boolean = true;

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
    this.hideSaveBtn = true;
  }

}
