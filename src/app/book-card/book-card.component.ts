import { Component } from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";
import {faStar as farStar} from "@fortawesome/free-regular-svg-icons/faStar";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [
    FaIconComponent,
    RouterLink
  ],
  templateUrl: './book-card.component.html',
  styles: ``
})
export class BookCardComponent {
  addedToToRead :boolean = true;

  protected readonly faStar = faStar;
  protected readonly farStar = farStar;

}
