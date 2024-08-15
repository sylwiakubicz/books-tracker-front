import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
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
  startDate : Date = new Date();
  endDate : Date = new Date();
  currentPage : number = 0;

}
