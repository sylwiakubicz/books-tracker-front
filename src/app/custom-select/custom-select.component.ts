import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {GenresService} from "../../services/GenresService";

@Component({
  selector: 'app-custom-select',
  standalone: true,
  imports: [
    NgClass,
    NgForOf
  ],
  templateUrl: './custom-select.component.html',
  styles: ``
})
export class CustomSelectComponent implements OnInit{

  constructor(private genresService : GenresService) {
  }

  isShow : Boolean = false;
  selectedOption: string = 'Genre';
  genresList : Genres[] = [];

  toggleDropdown() {
    this.isShow = !this.isShow;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.isShow = false;
  }

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
