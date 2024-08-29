import {Component, Input, OnInit} from '@angular/core';
import {StatusIconComponent} from "../status-icon/status-icon.component";
import {RouterLink} from "@angular/router";
import {Author} from "../home-page/home-page.component";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";


@Component({
  selector: 'app-mybook-card',
  standalone: true,
  imports: [
    StatusIconComponent,
    RouterLink,
    FaIconComponent
  ],
  templateUrl: './mybook-card.component.html',
  styles: ``
})
export class MybookCardComponent implements OnInit{
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


  protected readonly faArrowRight = faArrowRight;

}
