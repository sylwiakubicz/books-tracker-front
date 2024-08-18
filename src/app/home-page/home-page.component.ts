import {Component, OnInit} from '@angular/core';
import {SubmitBtnComponent} from "../submit-btn/submit-btn.component";
import {BooksService} from "../../services/BooksService";
import {NavbarComponent} from "../navbar/navbar.component";
import {BookCardComponent} from "../book-card/book-card.component";
import {BannerComponent} from "../banner/banner.component";
import {NgForOf} from "@angular/common";
import {RecomendedSectionComponent} from "../recomended-section/recomended-section.component";
import {CarouselSectionComponent} from "../carousel-section/carousel-section.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    SubmitBtnComponent,
    NavbarComponent,
    BookCardComponent,
    BannerComponent,
    NgForOf,
    RecomendedSectionComponent,
    CarouselSectionComponent
  ],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit{
  booksData : Book[] | undefined;

  constructor(private booksService: BooksService) {
  }

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks() {
    this.booksService.GetAllBooks().subscribe({
      next: (response) => {
        console.log("Test successful:", response);
        this.booksData = response.content;
        console.log(this.booksData)
      },
      error: (error) => {
        console.error("Test failed:", error);
      }
    })
  }

}

export interface Book {
  bookId: number;
  title: string;
  description: string;
  pageNumber: number;
  publicationYear: number;
  ISBN: string;
  covering: string;
  authors: Author[];
  genres: Genre[];
}

export interface Author {
  authorId: number;
  name: string;
  surname: string;
}

export interface Genre {
  genreId: number;
  name: string;
}
