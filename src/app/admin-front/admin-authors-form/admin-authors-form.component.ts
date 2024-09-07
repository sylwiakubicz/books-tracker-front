import {Component, Input, OnInit} from '@angular/core';
import {AuthorsService} from "../../services/AuthorsService";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";
import {Author} from "../../user-front/home-page/home-page.component";

@Component({
  selector: 'app-admin-authors-form',
  standalone: true,
  imports: [],
  templateUrl: './admin-authors-form.component.html',
  styles: ``
})
export class AdminAuthorsFormComponent implements OnInit{

  constructor(private authorService : AuthorsService, private router : Router) {
  }

  @Input() id : number = 0
  authorName : string = ''
  authorSurname : string = ''

  ngOnInit() {
    if (this.id !== 0) {
      this.authorService.GetAuthorById(this.id).subscribe({
        next: (author: Author) => {
          this.authorName = author.name;
          this.authorSurname = author.surname;
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }

  AddAuthor() {
    this.authorService.AddAuthor(this.authorName, this.authorSurname).subscribe({
        next: (response) => {
          this.router.navigate(['/admin/library/authors']);
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
  }

  UpdateAuthor() {
    const updatedAuthor: Author = {
      authorId: this.id,
      name: this.authorName,
      surname: this.authorSurname
    };

    this.authorService.UpdateAuthor(updatedAuthor).subscribe({
        next: (response) => {
          this.router.navigate(['/admin/library/authors']);
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
  }
}
