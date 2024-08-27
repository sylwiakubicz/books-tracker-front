import {Component, Input, OnInit} from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {NgClass, NgForOf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {GenresService} from "../../services/GenresService";
import {CustomSelectSortComponent} from "../custom-select-sort/custom-select-sort.component";
import {Status} from "../book-details/book-details.component";
import {CustomSelectStaticDataComponent} from "../custom-select-static-data/custom-select-static-data.component";
import {CustomSelectComponent} from "../custom-select/custom-select.component";


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
    CustomSelectComponent
  ],
  providers: [],
  templateUrl: './search-books-panel.component.html',
  styles: ``
})

export class SearchBooksPanelComponent {
  protected readonly faSearch = faSearch;

  @Input() isMyBooks : boolean = false;


}


