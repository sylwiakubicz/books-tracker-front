import {Component, OnInit} from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {NavbarComponent} from "../navbar/navbar.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-page-notfound',
  standalone: true,
  imports: [
    FooterComponent,
    NavbarComponent
  ],
  templateUrl: './page-notfound.component.html',
  styles: ``
})
export class PageNotfoundComponent implements OnInit{
  timer : number = 10;
  constructor(private router: Router) {}

  ngOnInit() {
    this.startCountdown();
  }

  startCountdown() {
    const interval = setInterval(() => {
      this.timer -= 1;
      if (this.timer === 0) {
        clearInterval(interval);
        if (this.router.url !== '/') {
          this.router.navigate(['/']);
        }
      }
    }, 1000);
  }

}
