import { Component } from '@angular/core';
import {CarouselSectionComponent} from "../carousel-section/carousel-section.component";
import {CarouselTitleComponent} from "../carousel-title/carousel-title.component";
import {CarouselMenuComponent} from "../carousel-menu/carousel-menu.component";

@Component({
  selector: 'app-carousel-wrapper-popular',
  standalone: true,
  imports: [
    CarouselSectionComponent,
    CarouselTitleComponent,
    CarouselMenuComponent
  ],
  templateUrl: './carousel-wrapper-popular.component.html',
  styles: ``
})
export class CarouselWrapperPopularComponent {

}
