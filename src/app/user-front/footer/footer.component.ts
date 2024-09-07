import { Component } from '@angular/core';
import {Data} from "@angular/router";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styles: ``
})
export class FooterComponent {
  year : number = new Date().getFullYear()

}
