import {Component} from '@angular/core';
import {BannerComponent} from "../banner/banner.component";
import {SearchBooksPanelComponent} from "../search-books-panel/search-books-panel.component";
import {BookCardComponent} from "../book-card/book-card.component";
import {NgForOf} from "@angular/common";
import {NavbarComponent} from "../navbar/navbar.component";
import {RouterOutlet} from "@angular/router";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-books-page',
  standalone: true,
  imports: [
    BannerComponent,
    SearchBooksPanelComponent,
    BookCardComponent,
    NgForOf,
    NavbarComponent,
    RouterOutlet,
    FooterComponent
  ],
  templateUrl: './books-page.component.html',
  styles: ``
})
export class BooksPageComponent {
}
