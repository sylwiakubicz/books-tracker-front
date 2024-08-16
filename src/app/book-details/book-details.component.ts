import {Component, Input, OnInit} from '@angular/core';
import {StarRatingComponent} from "../star-rating/star-rating.component";
import {StatusBtnComponent} from "../status-btn/status-btn.component";
import {InformationCardComponent} from "../information-card/information-card.component";
import {BooksService} from "../../services/BooksService";
import {NgOptimizedImage} from "@angular/common";
import {BookStateDetailsComponent} from "../book-state-details/book-state-details.component";
import {BookStatesService} from "../../services/BookStatesService";

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [
    StarRatingComponent,
    StatusBtnComponent,
    InformationCardComponent,
    NgOptimizedImage,
    BookStateDetailsComponent
  ],
  templateUrl: './book-details.component.html',
  styles: ``
})

export class BookDetailsComponent implements OnInit {
  @Input() id : number = 0;
  bookData : Book | undefined;
  bookStateData : BookState | undefined;
  authorsNames: string = "";
  genresNames: string ='';
  url : string = "https://drive.google.com/thumbnail?id=";

  constructor(private booksService: BooksService, private  bookStateService : BookStatesService) {
  }

  ngOnInit(): void {
    this.getBook(this.id);
    this.getBookStateData(this.id)
  }

  getBook(bookId : number) {
    this.booksService.GetBook(bookId).subscribe({
      next: (response) => {
        this.bookData = response;
        this.authorsNames = this.bookData?.authors?.map((author: Author) =>
          `${author.name} ${author.surname}`
        ).join(', ') || '';
        this.genresNames = this.bookData?.genres?.map((genre: Genre) =>
          `${genre.name}`
        ).join(', ') || '';
        this.url = this.url + this.bookData?.covering;
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  getBookStateData(bookId : number) {
    this.bookStateService.CheckIfExistAndThenGet(bookId).subscribe({
      next: (response) => {
       this.bookStateData = response;
       console.log(this.bookStateData)
      },
      error: (error) => {
        console.log(error)
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

export interface BookState {
  book : Book;
  bookStateId : number;
  currentPage : number;
  endDate : Date;
  rate : number;
  startDate : Date;
  status : Status;
}

export interface Status {
  id : number;
  statusName : string;
}
