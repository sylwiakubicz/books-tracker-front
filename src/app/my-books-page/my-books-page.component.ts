import { Component } from '@angular/core';
import {SearchBooksPanelComponent} from "../search-books-panel/search-books-panel.component";
import {SearchMybooksPanelComponent} from "../search-mybooks-panel/search-mybooks-panel.component";
import {BannerComponent} from "../banner/banner.component";
import {NavbarComponent} from "../navbar/navbar.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-my-books-page',
  standalone: true,
  imports: [
    SearchBooksPanelComponent,
    SearchMybooksPanelComponent,
    BannerComponent,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './my-books-page.component.html',
  styles: ``
})
export class MyBooksPageComponent {

}
