import {Component, Input, OnInit} from '@angular/core';
import {CarouselSectionComponent} from "../carousel-section/carousel-section.component";
import {CarouselTitleComponent} from "../carousel-title/carousel-title.component";
import {Book} from "../home-page/home-page.component";
import {BooksService} from "../../services/BooksService";

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
export class CarouselWrapperRandomComponent implements OnInit{
  booksData : Book[] | undefined;

  constructor(private booksService: BooksService) {
  }

  ngOnInit() {
    this.getRandomBooks()
  }

  getRandomBooks() {
    this.booksService.GetRandomBooks().subscribe({
      next: (response) => {
        console.log("random")
        console.log(response)
        this.booksData = response;
      }
    })
  }

}
