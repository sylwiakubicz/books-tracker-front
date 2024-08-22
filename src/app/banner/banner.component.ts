import { Component } from '@angular/core';
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './banner.component.html',
  styles: ``
})
export class BannerComponent {

    protected readonly faMagnifyingGlass = faMagnifyingGlass;
}
