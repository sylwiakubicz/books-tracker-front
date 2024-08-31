import {Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild} from '@angular/core';
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
  @Output() genreSelected = new EventEmitter<string>();

  @ViewChild('dropdown', { static: false }) dropdown!: ElementRef;

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
    this.genreSelected.emit(option)
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

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (this.isShow && this.dropdown && !this.dropdown.nativeElement.contains(event.target)) {
      this.isShow = false;
    }
  }
}

export interface Genres {
  id : number
  name : string
}
