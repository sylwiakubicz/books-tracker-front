import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './loading.component.html',
  styles: ``
})
export class LoadingComponent {
  @Input() isLoading : boolean | undefined;

}
