import {Component, Input} from '@angular/core';
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
export class CarouselItemComponent {
  @Input() bookTitle : string | undefined;
  @Input() bookUrl : string | undefined = '';
  @Input() id : number | undefined = 0;
  @Input() dragging : boolean | undefined = false;

  url : string = "https://drive.google.com/thumbnail?id=";
}
