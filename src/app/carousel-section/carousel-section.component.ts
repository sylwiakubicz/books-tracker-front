import {Component, Input} from '@angular/core';
import {CarouselItemComponent} from "../carousel-item/carousel-item.component";
import {NgClass} from "@angular/common";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons/faAngleRight";

@Component({
  selector: 'app-carousel-section',
  standalone: true,
  imports: [
    CarouselItemComponent,
    NgClass,
    FaIconComponent
  ],
  templateUrl: './carousel-section.component.html',
  styleUrl: `./carousel-section.component.css`
})
export class CarouselSectionComponent {
  @Input() title : string = ''

  protected readonly faAngleLeft = faAngleLeft;
  protected readonly faAngleRight = faAngleRight;

  dragging(event: MouseEvent): void {
    console.log(event.pageX)
  }
}
