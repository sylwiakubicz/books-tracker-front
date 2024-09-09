import {Component, OnInit} from '@angular/core';
import {CarouselSectionComponent} from "../carousel-section/carousel-section.component";
import {CarouselTitleComponent} from "../carousel-title/carousel-title.component";
import {CarouselMenuComponent} from "../carousel-menu/carousel-menu.component";
import {Book} from "../home-page/home-page.component";
import {BooksService} from "../../services/BooksService";

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
export class CarouselWrapperPopularComponent implements OnInit{
  booksData : Book[] | undefined;
  genre : string | undefined;

  constructor(private booksService: BooksService) {
  }

  ngOnInit() {
    this.getNewestBooks(this.genre ? this.genre : 'fantasy')
  }

  onGenreChange(genre :string) {
    this.genre = genre
    this.getNewestBooks(genre)
  }

  getNewestBooks(genre :string) {
    this.booksService.GetNewestBooks(genre).subscribe({
      next: (response) => {
        this.booksData = response;
      }
    })
  }
}
