import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-information-card',
  standalone: true,
  imports: [],
  templateUrl: './information-card.component.html',
  styles: ``
})
export class InformationCardComponent {

  @Input() genres : string = '';
  @Input() pageNum : number | undefined;
  @Input() pubYear : number | undefined;
  @Input() ISBN : string | undefined;

}
