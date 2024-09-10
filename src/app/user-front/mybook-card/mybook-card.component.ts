import {Component, Input, OnInit} from '@angular/core';
import {StatusIconComponent} from "../status-icon/status-icon.component";
import {RouterLink} from "@angular/router";
import {Author} from "../home-page/home-page.component";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {ReactiveFormsModule} from "@angular/forms";


@Component({
  selector: 'app-mybook-card',
  standalone: true,
  imports: [
    StatusIconComponent,
    RouterLink,
    FaIconComponent,
    ReactiveFormsModule
  ],
  templateUrl: './mybook-card.component.html',
  styles: ``
})
export class MybookCardComponent implements OnInit{
  @Input() currentBookPage : number = 0;
  @Input() totalBookPageNumber : number = 0;
  @Input() status : string = '';
  @Input() title: string = '';
  @Input() authors: Author[] = [];
  @Input() covering: string = '';
  @Input() id : number = 0;
  url : string = "https://drive.google.com/thumbnail?id=";
  authorsNames: string = "";
  barProgress : number = 0;
  defaultUrl : string = ""

  ngOnInit() {
    this.manageReceivedData()
    this.barProgress = (this.currentBookPage / this.totalBookPageNumber) * 100
  }

  manageReceivedData() {
    if (this.covering) {
      this.url = this.url + this.covering;
    }
    else {
      this.url = ''
      let randomNum = Math.floor(Math.random() * 5) + 1;
      this.defaultUrl = "assets/images/cover_v" + randomNum + ".png"
    }
    this.authorsNames = this.authors?.map((author: Author) =>
      `${author.name} ${author.surname}`
    ).join(', ') || '';
  }


  protected readonly faArrowRight = faArrowRight;

}
