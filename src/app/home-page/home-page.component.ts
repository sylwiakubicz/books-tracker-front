import { Component } from '@angular/core';
import {SubmitBtnComponent} from "../submit-btn/submit-btn.component";
import {BooksService} from "../../services/BooksService";
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    SubmitBtnComponent,
    NavbarComponent
  ],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private booksService: BooksService) {
  }

  test() {
    this.booksService.Test().subscribe({
      next: (response) => {
        console.log("Test successful:", response);
      },
      error: (error) => {
        console.error("Test failed:", error);
      }
    })
    console.log("test")

  }
}
