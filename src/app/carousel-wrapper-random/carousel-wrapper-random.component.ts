import {Component, Input} from '@angular/core';
import {CarouselSectionComponent} from "../carousel-section/carousel-section.component";
import {CarouselTitleComponent} from "../carousel-title/carousel-title.component";
import {Book} from "../home-page/home-page.component";

@Component({
  selector: 'app-carousel-wrapper-random',
  standalone: true,
  imports: [
    CarouselSectionComponent,
    CarouselTitleComponent
  ],
  templateUrl: './carousel-wrapper-random.component.html',
  styles: ``
})
export class CarouselWrapperRandomComponent {
  @Input() booksData : Book[] | undefined;

}
