import {Component, Input} from '@angular/core';
import {CarouselItemComponent} from "../carousel-item/carousel-item.component";
import {NgClass, NgForOf} from "@angular/common";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons/faAngleRight";
import {Book} from "../home-page/home-page.component";
import {BookCardComponent} from "../book-card/book-card.component";

@Component({
  selector: 'app-carousel-section',
  standalone: true,
  imports: [
    CarouselItemComponent,
    NgClass,
    FaIconComponent,
    BookCardComponent,
    NgForOf
  ],
  templateUrl: './carousel-section.component.html',
  styleUrl: `./carousel-section.component.css`
})
export class CarouselSectionComponent {
  @Input() title : string = ''
  @Input() booksData : Book[] | undefined;

  protected readonly faAngleLeft = faAngleLeft;
  protected readonly faAngleRight = faAngleRight;

  isDragging : boolean = false;

  dragStart(event : MouseEvent, carouselElement : HTMLElement) {
    this.isDragging = true;
    carouselElement.classList.add("select-none")
    carouselElement.classList.add("cursor-grab")
  }
  dragging(event: MouseEvent, carouselElement : HTMLElement ): void {
    if (!this.isDragging) return
    if (carouselElement) carouselElement.scrollLeft = event.pageX;
  }
}
