import {Component, Input, input} from '@angular/core';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faStar as farStar} from "@fortawesome/free-regular-svg-icons/faStar";
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent {
  protected readonly farStar = farStar;
  protected readonly faStar = faStar;

  @Input() rating : number | undefined;

  setRating (value : number) {
    this.rating = value;
  }
}
