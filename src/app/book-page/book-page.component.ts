import { Component } from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {StarRatingComponent} from "../star-rating/star-rating.component";
import {StatusBtnComponent} from "../status-btn/status-btn.component";
import {BannerComponent} from "../banner/banner.component";
import {BookDetailsComponent} from "../book-details/book-details.component";

@Component({
  selector: 'app-book-page',
  standalone: true,
  imports: [
    FaIconComponent,
    StarRatingComponent,
    StatusBtnComponent,
    BannerComponent,
    BookDetailsComponent
  ],
  templateUrl: './book-page.component.html',
})
export class BookPageComponent {

}
