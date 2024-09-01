import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../home-page/home-page.component";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import {BookCardComponent} from "../book-card/book-card.component";
import {CustomSelectComponent} from "../custom-select/custom-select.component";
import {CustomSelectSortComponent} from "../custom-select-sort/custom-select-sort.component";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CustomSelectStaticDataComponent} from "../custom-select-static-data/custom-select-static-data.component";
import {MybookCardComponent} from "../mybook-card/mybook-card.component";
import {Status} from "../book-details/book-details.component";
import {BookStatesService} from "../../services/BookStatesService";
import {AuthService} from "../../services/AuthService";
import {Router} from "@angular/router";
import {LoadingComponent} from "../loading/loading.component";


@Component({
  selector: 'app-search-mybooks-panel',
  standalone: true,
  imports: [
    FaIconComponent,
    BookCardComponent,
    CustomSelectComponent,
    CustomSelectSortComponent,
    NgForOf,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    CustomSelectStaticDataComponent,
    MybookCardComponent,
    LoadingComponent,
    NgIf
  ],
  templateUrl: './search-mybooks-panel.component.html',
  styleUrl: `./search-mybooks-panel.component.css`
})
export class SearchMybooksPanelComponent implements OnInit{
  protected readonly faSearch = faSearch;

  @Input() isMyBooks : boolean = false;
  bookStateData : BookState[] = [];

  totalItems = 0;
  pageSize = 10;
  currentPage = 1;
  search : string = '';
  selectedGenre : string = '';
  selectedSort : string = '';
  statusSelected : string = '';
  isLoading : boolean | undefined;

  constructor(private bookStatesService : BookStatesService, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.getAllBooksState()
  }

  getAllBooksState() {
    this.isLoading = true
    this.bookStatesService.GetAllBooksState({
      size: this.pageSize ,
      sort: this.selectedSort,
      page: this.currentPage - 1,
      status: this.statusSelected,
      genre: this.selectedGenre,
      search: this.search
    }).subscribe({
      next: (response) => {
        this.bookStateData = response.content.map((item: any): BookState => ({
          book: item.book,
          currentPage: item.currentPage,
          status: item.status
        }));
        this.totalItems = response.totalElements
        this.isLoading = false
      },
      error : (error) => {
        console.log(error)
        this.isLoading = false
      }
    })
  }

  handleSearch() {
    this.authService.GetUserRole().subscribe(role => {
      if (role === null) {
        this.router.navigate(['/login']);
      } else {
        this.getAllBooksState();
      }
    })
  }

  pageChanged(page : number) {
    this.currentPage = page
    this.authService.GetUserRole().subscribe(role => {
      if (role === null) {
        this.router.navigate(['/login']);
      } else {
        this.getAllBooksState();
      }
    })
  }

  onGenreSelected(selectedGenre: string) {
    this.selectedGenre = selectedGenre;
  }

  onSortSelected(sortSelected: string) {
    this.selectedSort = sortSelected;
  }

  onStatusSelected(statusSelected : string) {
    this.statusSelected = statusSelected;
  }
}

export interface BookState {
  book: Book;
  currentPage: number;
  status: Status;
}
