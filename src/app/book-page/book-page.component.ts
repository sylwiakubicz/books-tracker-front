import { Component } from '@angular/core';
import {faStar} from "@fortawesome/free-regular-svg-icons/faStar";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {StarRatingComponent} from "../star-rating/star-rating.component";

@Component({
  selector: 'app-book-page',
  standalone: true,
  imports: [
    FaIconComponent,
    StarRatingComponent
  ],
  templateUrl: './book-page.component.html',
})
export class BookPageComponent {

  protected readonly farStar = faStar;
}
