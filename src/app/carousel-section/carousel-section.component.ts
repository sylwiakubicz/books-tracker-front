import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges, QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren
} from '@angular/core';
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
export class CarouselSectionComponent implements AfterViewInit, OnChanges{
  @Input() title : string = ''
  @Input() booksData : Book[] | undefined;

  protected readonly faAngleLeft = faAngleLeft;
  protected readonly faAngleRight = faAngleRight;


  isDragging : boolean = false;
  startX : number = 0;
  startScrollLeft : number = 0;
  @ViewChild('carouselElement') carouselElement!: ElementRef<HTMLUListElement>;
  @ViewChildren(CarouselItemComponent, { read: ElementRef }) carouselItems!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.setupCarousel();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.booksData) {
      this.setupCarousel();
    }
  }

  setupCarousel() {
    const carousel = this.carouselElement.nativeElement;
    if (carousel) {
      const firstCard = this.carouselItems.first.nativeElement;
      if (firstCard) {
        const firstCardWidth = firstCard.offsetWidth;
        console.log("cała szerokość")
        console.log(carousel.offsetWidth)
        console.log("szerkość jednej karty")
        console.log(firstCardWidth)
        const cardsPerView = Math.round(carousel.offsetWidth / firstCardWidth) - 1;

        const carouselChildren = Array.from(carousel.children);

        carouselChildren.slice(-cardsPerView).reverse().forEach(card => {
          carousel.insertAdjacentHTML("afterbegin", (card as HTMLElement).outerHTML);
        });

        carouselChildren.slice(0, cardsPerView).forEach(card => {
          carousel.insertAdjacentHTML("beforeend", (card as HTMLElement).outerHTML);
        });

        console.log('Adding elements at the beginning:', carouselChildren.slice(-cardsPerView).map(card => card.outerHTML));
        console.log('Adding elements at the end:', carouselChildren.slice(0, cardsPerView).map(card => card.outerHTML));
      }
    }
  }

  dragStart(event : MouseEvent, carouselElement : HTMLElement) {
    this.isDragging = true;
    carouselElement.classList.add("select-none")
    carouselElement.classList.add("cursor-grab")
    carouselElement.classList.add("snap-none")
    carouselElement.classList.remove("scroll-smooth")
    carouselElement.classList.remove("snap-x")
    carouselElement.classList.remove("cursor-pointer")
    this.startX = event.pageX;
    this.startScrollLeft = carouselElement.scrollLeft
  }

  dragging(event: MouseEvent, carouselElement : HTMLElement ): void {
    if (!this.isDragging) return
    if (carouselElement) carouselElement.scrollLeft = this.startScrollLeft - (event.pageX - this.startX);
  }

  dragStop(event : MouseEvent, carouselElement : HTMLElement) {
    this.isDragging = false;
    carouselElement.classList.remove("select-none")
    carouselElement.classList.remove("cursor-grab")
    carouselElement.classList.remove("snap-none")
    carouselElement.classList.add("cursor-pointer")
    carouselElement.classList.add("scroll-smooth")
    carouselElement.classList.add("snap-x")

  }

  arrowClick(event : MouseEvent, direction: string, carouselElement: HTMLElement) {
    const firstCard = carouselElement.querySelector<HTMLElement>(".card");
    if (firstCard) {
      const firstCardWidth = firstCard.offsetWidth;
      carouselElement.scrollLeft += direction === "left" ? -firstCardWidth : firstCardWidth;
    }
  }

  infiniteScroll(event : Event, carouselElement : HTMLElement) {
    if(carouselElement.scrollLeft === 0) {
      carouselElement.classList.remove("scroll-smooth")
      carouselElement.classList.add("scroll-auto")
      carouselElement.scrollLeft = carouselElement.scrollWidth - (2 * carouselElement.offsetWidth);
      carouselElement.classList.remove("scroll-auto")
      carouselElement.classList.add("scroll-smooth")
    } else if (Math.ceil(carouselElement.scrollLeft) === carouselElement.scrollWidth - carouselElement.offsetWidth) {
      carouselElement.classList.remove("scroll-smooth")
      carouselElement.classList.add("scroll-auto")
      carouselElement.scrollLeft = carouselElement.offsetWidth;
      carouselElement.classList.remove("scroll-auto")
      carouselElement.classList.add("scroll-smooth")
    }

  }
}
