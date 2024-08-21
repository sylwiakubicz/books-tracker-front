import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-carousel-item',
  standalone: true,
  imports: [],
  templateUrl: './carousel-item.component.html',
  styles: ``
})
export class CarouselItemComponent {
  @Input() bookTitle : string | undefined;
  @Input() bookUrl : string | undefined = '';

  url : string = "https://drive.google.com/thumbnail?id=";
}
