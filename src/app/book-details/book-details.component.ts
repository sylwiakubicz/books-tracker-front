import { Component } from '@angular/core';
import {StarRatingComponent} from "../star-rating/star-rating.component";
import {StatusBtnComponent} from "../status-btn/status-btn.component";
import {InformationCardComponent} from "../information-card/information-card.component";

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [
    StarRatingComponent,
    StatusBtnComponent,
    InformationCardComponent
  ],
  templateUrl: './book-details.component.html',
  styles: ``
})
export class BookDetailsComponent {

}
