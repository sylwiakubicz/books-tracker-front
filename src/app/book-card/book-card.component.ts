import {Component, Input, OnInit} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faSquareCheck} from "@fortawesome/free-solid-svg-icons/faSquareCheck";
import {faSquareCheck as farSquareCheck} from "@fortawesome/free-regular-svg-icons/faSquareCheck";
import {RouterLink} from "@angular/router";
import {Author} from "../home-page/home-page.component";
import {BookStatesService} from "../../services/BookStatesService";

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [
    FaIconComponent,
    RouterLink
  ],
  templateUrl: './book-card.component.html',
  styles: ``
})
export class BookCardComponent implements OnInit{
  @Input() title: string = '';
  @Input() authors: Author[] = [];
  @Input() covering: string = '';
  @Input() description: string = '';
  @Input() id : number = 0;
  url : string = "https://drive.google.com/thumbnail?id=";
  authorsNames: string = "";

  status : string = "";

  protected readonly faSquareCheck = faSquareCheck;
  protected readonly farSquareCheck = farSquareCheck;

  constructor(private bookStatesService : BookStatesService) {
  }

  ngOnInit() {
    this.manageReceivedData()
    this.checkIfBookStateExist()
  }

  manageReceivedData() {
    this.url = this.url + this.covering;

    this.authorsNames = this.authors?.map((author: Author) =>
      `${author.name} ${author.surname}`
    ).join(', ') || '';
  }

  checkIfBookStateExist() {
    this.bookStatesService.CheckIfExistAndThenGet(this.id).subscribe({
      next: (response) => {
        this.status = response?.status.statusName;
      }
    })
  }

}
