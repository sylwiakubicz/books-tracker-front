import {Component, Input, OnInit} from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {NgClass, NgForOf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {GenresService} from "../../services/GenresService";
import {CustomSelectSortComponent} from "../custom-select-sort/custom-select-sort.component";
import {Status} from "../book-details/book-details.component";


@Component({
  selector: 'app-search-books-panel',
  standalone: true,
  imports: [
    FaIconComponent,
    NgForOf,
    HttpClientModule,
    NgClass,
    CustomSelectSortComponent
  ],
  providers: [],
  templateUrl: './search-books-panel.component.html',
  styles: ``
})

export class SearchBooksPanelComponent implements OnInit{
  protected readonly faSearch = faSearch;

  constructor(private genresService : GenresService) {
  }

  genresList : Genres[] = [];
  statusList : Status[] = [];
  @Input() isMyBooks :boolean = false;

  ngOnInit() {
    this.getAllGenres()
  }

  getAllGenres() {
    this.genresService.GetAllGenres().subscribe({
      next: (response) => {
        this.genresList = response
      },
      error: (error) => {
        console.error("Test failed:", error);
      }
    })
  }

  getAllStatuses() {
    console.log("statusy")
  }

}

export interface Genres {
  id : number
  name : string
}
