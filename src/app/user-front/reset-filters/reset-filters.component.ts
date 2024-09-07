import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-reset-filters',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './reset-filters.component.html',
  styles: ``
})
export class ResetFiltersComponent {
  @Input() changeInFilters : boolean | undefined;

  resetFilters() {
    window.location.reload()
  }
}
