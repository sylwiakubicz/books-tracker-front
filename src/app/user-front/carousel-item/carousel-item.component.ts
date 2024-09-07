import {Component, Input, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-carousel-item',
  standalone: true,
  imports: [
    RouterLink,
    NgClass
  ],
  templateUrl: './carousel-item.component.html',
  styles: ``
})
export class CarouselItemComponent implements OnInit{
  @Input() bookTitle : string | undefined;
  @Input() bookUrl : string | undefined = '';
  @Input() id : number | undefined = 0;
  @Input() dragging : boolean | undefined = false;

  url : string = "https://drive.google.com/thumbnail?id=";
  defaultUrl : string = ""

  ngOnInit() {
    if (!this.bookUrl) {
      let randomNum = Math.floor(Math.random() * 5) + 1;
      this.defaultUrl = "assets/images/cover_v" + randomNum + ".png"
    }
  }
}
