import {Component, Input, OnInit} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {RouterLink} from "@angular/router";
import {Author} from "../home-page/home-page.component";
import {StatusIconComponent} from "../status-icon/status-icon.component";

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [
    FaIconComponent,
    RouterLink,
    StatusIconComponent
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


  ngOnInit() {
    this.manageReceivedData()
  }

  manageReceivedData() {
    this.url = this.url + this.covering;

    this.authorsNames = this.authors?.map((author: Author) =>
      `${author.name} ${author.surname}`
    ).join(', ') || '';
  }



}
