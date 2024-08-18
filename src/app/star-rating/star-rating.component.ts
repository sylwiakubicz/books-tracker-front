import {Component, Input, input} from '@angular/core';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faStar as farStar} from "@fortawesome/free-regular-svg-icons/faStar";
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";
import {BookStatesService} from "../../services/BookStatesService";

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
  @Input() startDate : Date | undefined;
  @Input() endDate : Date | undefined;
  @Input() book_id : number | undefined;

  constructor(private bookStateService : BookStatesService) {
  }

  setRating (value : number) {
    this.rating = value;
    if (this.book_id)
    this.updateBookToNewStatus(this.book_id, "Read", this.rating, this.startDate ? this.startDate : null, this.endDate ? this.endDate : null )
  }

  updateBookToNewStatus(book_id : number, status : string, rate : number | null, startDate : Date | null, endDate : Date | null) {
    this.bookStateService.UpdateBookToStatus(book_id, status , rate, null,startDate, endDate).subscribe(
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
