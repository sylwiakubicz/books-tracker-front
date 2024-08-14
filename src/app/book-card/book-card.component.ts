import {Component, Input, OnInit} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";
import {faStar as farStar} from "@fortawesome/free-regular-svg-icons/faStar";
import {RouterLink} from "@angular/router";
import {Author} from "../home-page/home-page.component";

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
  @Input() id : number | undefined;
  url : string = "https://drive.google.com/thumbnail?id="
  authorsNames: string = ""
  addedToToRead :boolean = true;

  protected readonly faStar = faStar;
  protected readonly farStar = farStar;

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
