import {Component, Input} from '@angular/core';
import {CarouselItemComponent} from "../carousel-item/carousel-item.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-carousel-section',
  standalone: true,
  imports: [
    CarouselItemComponent,
    NgClass
  ],
  templateUrl: './carousel-section.component.html',
  styleUrl: `./carousel-section.component.css`
})
export class CarouselSectionComponent {
  @Input() title : string = ''
}
