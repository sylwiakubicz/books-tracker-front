import {Component, OnInit} from '@angular/core';
import {AdminEditBtnComponent} from "../admin-edit-btn/admin-edit-btn.component";
import {AdminDeleteBtnComponent} from "../admin-delete-btn/admin-delete-btn.component";
import {BooksService} from "../../services/BooksService";
import {Author, Book, Genre} from "../../user-front/home-page/home-page.component";
import {Router} from "@angular/router";
import {AuthService} from "../../services/AuthService";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {LoadingComponent} from "../../user-front/loading/loading.component";

@Component({
  selector: 'app-admin-books-table',
  standalone: true,
  imports: [
    AdminEditBtnComponent,
    AdminDeleteBtnComponent,
    NgForOf,
    NgxPaginationModule,
    NgIf,
    LoadingComponent
  ],
  templateUrl: './admin-books-table.component.html',
  styles: ``
})
export class AdminBooksTableComponent implements OnInit{
  constructor(private booksService : BooksService, private router : Router, private authService : AuthService) {
  }

  booksData : Book[] = []
  isLoading : boolean = true
  totalItems = 0;
  pageSize = 20;
  currentPage = 1;
  search : string = '';
  changeInFilters : boolean | undefined;


  ngOnInit() {
    this.getAllBooks()
  }

  getAllBooks() {
    this.booksService.GetAllBooks({
      size: this.pageSize ,
      sort: '',
      page: this.currentPage - 1,
      search : this.search,
      genre: '',
    }).subscribe({
      next: (response) => {
        this.booksData = response.content;
        this.booksData = this.booksData.map(book => {
          book.authorsName = book.authors?.map((author: Author) =>
            `${author.name} ${author.surname}`
          ).join(', ') || 'Unknown Author';

          book.genresName = book.genres?.map((genre: Genre) =>
            genre.name
          ).join(', ') || 'Unknown Genre';

          book.covering = book.covering ? 'https://drive.google.com/thumbnail?id=' + book.covering : '';

          return book;
        });
        this.totalItems = response.totalElements
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Test failed:", error);
        this.isLoading = false;
      }
    });
  }



  pageChanged(page : number) {
    this.currentPage = page
    this.authService.GetUserRole().subscribe(role => {
      if (role === null) {
        this.router.navigate(['/login']);
      } else {
        this.getAllBooks();
      }
    })
  }


  handleSearch() {
    this.changeInFilters = true;
    this.authService.GetUserRole().subscribe(role => {
      if (role === null) {
        this.router.navigate(['/login']);
      } else {
        this.getAllBooks();
      }
    })
  }
}
