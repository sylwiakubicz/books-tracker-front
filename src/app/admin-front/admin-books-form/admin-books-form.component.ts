import {Component, OnInit} from '@angular/core';
import {BooksService} from "../../services/BooksService";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/AuthService";
import {GenresService} from "../../services/GenresService";
import {FormsModule} from "@angular/forms";
import {Author, Genre} from "../../user-front/home-page/home-page.component";
import {NgForOf, NgIf} from "@angular/common";
import {AuthorsService} from "../../services/AuthorsService";

@Component({
  selector: 'app-admin-books-form',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf
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
  url : string = "";

  ngOnInit() {
    this.getAllGenres();
    this.getAllAuthors();
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.id = +idParam;
        this.loadBookData()
      }
    });
  }

  submitBook() {
    this.authService.GetUserRole().subscribe(role => {
      if (role === null) {
        this.router.navigate(['/login']);
      } else {
        if (this.id != 0) {
          this.updateBook()
        } else {
          this.addBook()
        }
      }
   })
  }

  addBook() {
    this.booksService
      .AddBook(
        this.title,
        this.description,
        this.pageNumber,
        this.publicationYear,
        this.ISBN,
        this.image ? this.image : undefined,
        this.authorsJson,
        this.genresJson
      )
      .subscribe({
        next: (response) => {
          this.router.navigate(["/admin/library/books"])
        },
        error: (error) => {
          console.error(error);
        }
      });
  }

  updateBook() {
    this.booksService
      .UpdateBook(
        this.title,
        this.description,
        this.pageNumber,
        this.publicationYear,
        this.ISBN,
        this.image ? this.image : undefined,
        this.authorsJson,
        this.genresJson,
        this.id
      )
      .subscribe({
        next: (response) => {
        this.router.navigate(["/admin/library/books"])
      },
      error: (error) => {
      console.error(error);
      }
    });
  }

  getAllGenres(): void {
    this.genresService.GetAllGenres().subscribe({
      next: (response) => {
        this.genresList = response;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  loadBookData() {
    this.booksService.GetBook(this.id).subscribe(
      {
        next: (response) => {
          this.title = response.title
          this.description = response.description
          this.ISBN = response.isbn
          this.publicationYear = response.publicationYear
          this.pageNumber = response.pageNumber
          this.authorsJson = response.authors.map((author : Author)=> {return {"name": author.name, "surname": author.surname}})
          this.genresJson = response.genres.map((genre : Genre) => {return {"name": genre.name}})
          if(response.covering) {this.url += "https://drive.google.com/thumbnail?id=" + response.covering}
        },
        error: (error) => {
          console.error(error);
        }
      })
  }

  getAllAuthors() {
    this.authorsService.GetAllAuthors({size: 1000, search: ''}).subscribe({
      next: (response) => {
      this.authorsList = response.content;
    },
      error: (error) => {
      console.error(error);
    }
    })
  }

  isAuthorSelected(author: Author): boolean {
    return this.authorsJson.some(a => a.name === author.name && a.surname === author.surname);
  }

  isGenreSelected(genre: Genre): boolean {
    return this.genresJson.some(g => g.name === genre.name);
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
      this.url=''
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
