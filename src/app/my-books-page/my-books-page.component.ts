import { Component } from '@angular/core';
import {SearchBooksPanelComponent} from "../search-books-panel/search-books-panel.component";

@Component({
  selector: 'app-my-books-page',
  standalone: true,
  imports: [
    SearchBooksPanelComponent
  ],
  templateUrl: './my-books-page.component.html',
  styles: ``
})
export class MyBooksPageComponent {

}
