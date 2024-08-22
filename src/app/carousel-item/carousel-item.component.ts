import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-carousel-item',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './carousel-item.component.html',
  styles: ``
})
export class CarouselItemComponent {
  @Input() bookTitle : string | undefined;
  @Input() bookUrl : string | undefined = '';
  @Input() id : number | undefined = 0;

  url : string = "https://drive.google.com/thumbnail?id=";
}
