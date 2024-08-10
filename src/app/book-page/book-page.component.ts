import { Component } from '@angular/core';
import {faStar} from "@fortawesome/free-regular-svg-icons/faStar";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-book-page',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './book-page.component.html',
})
export class BookPageComponent {

  protected readonly farStar = faStar;
}
