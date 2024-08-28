import {Component} from '@angular/core';
import {BannerComponent} from "../banner/banner.component";
import {SearchBooksPanelComponent} from "../search-books-panel/search-books-panel.component";
import {BookCardComponent} from "../book-card/book-card.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-books-page',
  standalone: true,
  imports: [
    BannerComponent,
    SearchBooksPanelComponent,
    BookCardComponent,
    NgForOf
  ],
  templateUrl: './books-page.component.html',
  styles: ``
})
export class BooksPageComponent {
}
