import {Component, Input} from '@angular/core';
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    FaIconComponent,
    NgClass
  ],
  templateUrl: './banner.component.html',
  styles: ``
})
export class BannerComponent {
  @Input() isSearch : boolean = false;

    protected readonly faMagnifyingGlass = faMagnifyingGlass;
}
