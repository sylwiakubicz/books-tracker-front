import {Component, OnInit} from '@angular/core';
import {SubmitBtnComponent} from "../submit-btn/submit-btn.component";
import {BooksService} from "../../services/BooksService";
import {NavbarComponent} from "../navbar/navbar.component";
import {BookCardComponent} from "../book-card/book-card.component";
import {BannerComponent} from "../banner/banner.component";
import {NgForOf, NgIf} from "@angular/common";
import {CarouselSectionComponent} from "../carousel-section/carousel-section.component";
import {CarouselWrapperPopularComponent} from "../carousel-wrapper-popular/carousel-wrapper-popular.component";
import {CarouselWrapperRandomComponent} from "../carousel-wrapper-random/carousel-wrapper-random.component";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {Router, RouterOutlet} from "@angular/router";
import {FooterComponent} from "../footer/footer.component";
import {AuthService} from "../../services/AuthService";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    SubmitBtnComponent,
    NavbarComponent,
    BookCardComponent,
    BannerComponent,
    NgForOf,
    CarouselSectionComponent,
    CarouselWrapperPopularComponent,
    CarouselWrapperRandomComponent,
    FaIconComponent,
    RouterOutlet,
    FooterComponent,
    NgIf
  ],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit{

  constructor(private authService : AuthService, private router : Router) {
  }

  ngOnInit() {
    this.authService.GetUserRole().subscribe(role => {
      if (role === "ROLE_ADMIN") {
        this.router.navigate(['/admin/accounts']);
      }
    })
  }

  protected readonly faMagnifyingGlass = faMagnifyingGlass;
}

export interface Book {
  bookId: number;
  title: string;
  description: string;
  pageNumber: number;
  publicationYear: number;
  ISBN: string;
  covering: string;
  authors: Author[];
  genres: Genre[];
}

export interface Author {
  authorId: number;
  name: string;
  surname: string;
}

export interface Genre {
  genreId: number;
  name: string;
}
