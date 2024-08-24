import {Component, OnInit} from '@angular/core';
import {BannerComponent} from "../banner/banner.component";
import {SearchBooksPanelComponent} from "../search-books-panel/search-books-panel.component";
import {BooksService} from "../../services/BooksService";
import {Book} from "../home-page/home-page.component";
import {BookCardComponent} from "../book-card/book-card.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-books-page',
  standalone: true,
  imports: [
    BannerComponent,
    SearchBooksPanelComponent,
    BookCardComponent,
    NgForOf
  ],
  templateUrl: './books-page.component.html',
  styles: ``
})
export class BooksPageComponent implements OnInit{
  booksData : Book[] | undefined;

  constructor(private booksService : BooksService) {
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
