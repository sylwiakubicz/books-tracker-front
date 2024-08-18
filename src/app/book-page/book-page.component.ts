import {Component, OnInit} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {StarRatingComponent} from "../star-rating/star-rating.component";
import {StatusBtnComponent} from "../status-btn/status-btn.component";
import {BannerComponent} from "../banner/banner.component";
import {BookDetailsComponent} from "../book-details/book-details.component";
import {ActivatedRoute} from "@angular/router";
import {CarouselWrapperRandomComponent} from "../carousel-wrapper-random/carousel-wrapper-random.component";

@Component({
  selector: 'app-book-page',
  standalone: true,
  imports: [
    FaIconComponent,
    StarRatingComponent,
    StatusBtnComponent,
    BannerComponent,
    BookDetailsComponent,
    CarouselWrapperRandomComponent,
  ],
  templateUrl: './book-page.component.html',
})
export class BookPageComponent implements OnInit {
  id : number = 0;
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }
}
