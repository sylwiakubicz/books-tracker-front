import { Component } from '@angular/core';
import {faArrowDown, faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-custom-select-sort',
  standalone: true,
  imports: [
    FaIconComponent,
    NgClass
  ],
  templateUrl: './custom-select-sort.component.html',
  styles: ``
})
export class CustomSelectSortComponent {
  isShow : Boolean = false;
  selectedOption: string = 'Title';
  sort : string = 'asc';

  toggleDropdown() {
    this.isShow = !this.isShow;
  }

  selectOption(option: string, sort : string) {
    this.selectedOption = option;
    this.isShow = false;
    this.sort = sort;
  }

  protected readonly faArrowUp = faArrowUp;
  protected readonly faArrowDown = faArrowDown;
}
