import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {NgClass, NgForOf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {CustomSelectSortComponent} from "../custom-select-sort/custom-select-sort.component";
import {CustomSelectStaticDataComponent} from "../custom-select-static-data/custom-select-static-data.component";
import {CustomSelectComponent} from "../custom-select/custom-select.component";
import {NgxPaginationModule} from "ngx-pagination";
import {FormsModule} from "@angular/forms";
import {BookCardComponent} from "../book-card/book-card.component";
import {Book} from "../home-page/home-page.component";
import {BooksService} from "../../services/BooksService";


@Component({
  selector: 'app-search-books-panel',
  standalone: true,
  imports: [
    FaIconComponent,
    NgForOf,
    HttpClientModule,
    NgClass,
    CustomSelectSortComponent,
    CustomSelectStaticDataComponent,
    CustomSelectComponent,
    NgxPaginationModule,
    FormsModule,
    BookCardComponent
  ],
  providers: [],
  templateUrl: './search-books-panel.component.html',
  styleUrl: `./search-books-panel.component.css`
})

export class SearchBooksPanelComponent implements OnInit{
  protected readonly faSearch = faSearch;
  constructor(private booksService : BooksService) {
  }

  booksData : Book[] = [];

  totalItems = 0;
  pageSize = 10;
  currentPage = 1;
  search : string ='';
  selectedGenre : string ='';
  selectedSort : string = '';

  ngOnInit() {
    this.getAllBooks();
  }

  handleSearch() {
    console.log(this.search)
    console.log(this.selectedGenre)
    console.log(this.selectedSort)
    this.getAllBooks();
  }

  pageChanged(page : number) {
    this.currentPage = page
    this.getAllBooks()
  }

  onGenreSelected(selectedGenre: string) {
    this.selectedGenre = selectedGenre;
  }

  onSortSelected(sortSelected: string) {
    this.selectedSort = sortSelected;
  }

  getAllBooks() {
    this.booksService.GetAllBooks({
      size: this.pageSize ,
      sort: this.selectedSort,
      page: this.currentPage - 1,
      search : this.search,
      genre: this.selectedGenre,
    }).subscribe({
      next: (response) => {
        console.log("Test successful:", response);
        this.booksData = response.content;
        this.totalItems = response.totalElements
      },
      error: (error) => {
        console.error("Test failed:", error);
      }
    });
  }

}


