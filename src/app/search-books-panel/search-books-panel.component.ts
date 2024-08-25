import {Component, OnInit} from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { NgForOf } from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {GenresService} from "../../services/GenresService";


@Component({
  selector: 'app-search-books-panel',
  standalone: true,
  imports: [
    FaIconComponent,
    NgForOf,
    HttpClientModule
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

}

export interface Genres {
  id : number
  name : string
}
