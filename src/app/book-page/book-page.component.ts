import {Component, OnInit} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {StarRatingComponent} from "../star-rating/star-rating.component";
import {StatusBtnComponent} from "../status-btn/status-btn.component";
import {BannerComponent} from "../banner/banner.component";
import {BookDetailsComponent} from "../book-details/book-details.component";
import {ActivatedRoute, Router} from "@angular/router";
import {RecomendedSectionComponent} from "../recomended-section/recomended-section.component";
import {CarouselSectionComponent} from "../carousel-section/carousel-section.component";

@Component({
  selector: 'app-book-page',
  standalone: true,
  imports: [
    FaIconComponent,
    StarRatingComponent,
    StatusBtnComponent,
    BannerComponent,
    BookDetailsComponent,
    RecomendedSectionComponent,
    CarouselSectionComponent
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
