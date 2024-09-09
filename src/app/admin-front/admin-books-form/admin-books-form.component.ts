import {Component, OnInit} from '@angular/core';
import {BooksService} from "../../services/BooksService";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/AuthService";
import {GenresService} from "../../services/GenresService";
import {FormsModule} from "@angular/forms";
import {Author, Genre} from "../../user-front/home-page/home-page.component";
import {NgForOf} from "@angular/common";
import {AuthorsService} from "../../services/AuthorsService";

@Component({
  selector: 'app-admin-books-form',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './admin-books-form.component.html',
  styles: ``
})
export class AdminBooksFormComponent implements OnInit{

  constructor(private booksService: BooksService, private authorsService : AuthorsService, private genresService: GenresService, private router: Router, private route: ActivatedRoute, private authService: AuthService) {
  }

  id: number = 0
  title: string = ''
  description: string = ''
  pageNumber: number = 0
  publicationYear: number = 0
  ISBN: string = ''
  image: File | undefined = undefined;
  authorsJson: AuthorOnlyString[] = [];
  genresJson: GenreOnlyString[] = [];
  genresList: Array<Genre> = [];
  authorsList : Array<Author> = [];

  ngOnInit() {
    this.getAllGenres();
    this.getAllAuthors();
  }

  getAllGenres(): void {
    this.genresService.GetAllGenres().subscribe({
      next: (response) => {
        this.genresList = response;
      },
      error: (error) => {
        console.error("Błąd pobierania gatunków:", error);
      }
    });
  }

  getAllAuthors() {
    this.authorsService.GetAllAuthors({size: 1000, search: ''}).subscribe({
      next: (response) => {
      this.authorsList = response.content;
    },
      error: (error) => {
      console.error("Błąd pobierania gatunków:", error);
    }
    })
  }

  onGenreCheckboxChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    const genreName = checkbox.value;

    if (checkbox.checked) {
      this.genresJson.push({ name: genreName });
    } else {
      this.genresJson = this.genresJson.filter(g => g.name !== genreName);
    }
  }

  onAuthorCheckboxChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    const authorIndex = parseInt(checkbox.value, 10);
    const author: Author = this.authorsList[authorIndex];
    if (checkbox.checked) {
      this.authorsJson.push({"name": author.name, "surname": author.surname});
    } else {
      this.authorsJson = this.authorsJson.filter(a => a.name !== author.name && a.surname !== author.surname);
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.image = input.files[0];
    }
  }

}

interface AuthorOnlyString {
  name: string;
  surname: string;
}

interface GenreOnlyString {
  name: string;
}
