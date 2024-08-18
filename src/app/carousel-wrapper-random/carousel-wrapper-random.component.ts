import { Component } from '@angular/core';
import {CarouselSectionComponent} from "../carousel-section/carousel-section.component";
import {CarouselTitleComponent} from "../carousel-title/carousel-title.component";

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

}
