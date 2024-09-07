import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-carousel-menu',
  standalone: true,
  imports: [],
  templateUrl: './carousel-menu.component.html',
  styles: ``
})
export class CarouselMenuComponent {
  @Output() genre = new EventEmitter<string>();

  handleGenreChange(genre : string) {
    this.genre.emit(genre)
  }


}
