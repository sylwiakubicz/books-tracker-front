import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-carousel-title',
  standalone: true,
  imports: [],
  templateUrl: './carousel-title.component.html',
  styles: ``
})
export class CarouselTitleComponent {
  @Input() title : string = ""
}
