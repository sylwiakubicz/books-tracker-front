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
import {NgxPaginationModule} from "ngx-pagination";
import {FormsModule} from "@angular/forms";


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
    FormsModule
  ],
  providers: [],
  templateUrl: './search-books-panel.component.html',
  styles: ``
})

export class SearchBooksPanelComponent {
  protected readonly faSearch = faSearch;

  @Input() isMyBooks : boolean = false;

  totalItems = 100;
  pageSize = 10;
  currentPage = 1;

  items = this.getData(this.currentPage - 1, this.pageSize);

  pageChanged(event : any) {
    this.currentPage = event.page;
    this.items = this.getData(this.currentPage - 1, this.pageSize);
  }

  getData(currentPage : number, pageSize :number) {
    return []
  }

}


