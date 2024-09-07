import {Component, OnInit} from '@angular/core';
import {AuthorsService} from "../../services/AuthorsService";
import {ActivatedRoute, Router} from "@angular/router";
import {Author} from "../../user-front/home-page/home-page.component";
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AuthService} from "../../services/AuthService";

@Component({
  selector: 'app-admin-authors-form',
  standalone: true,
  imports: [
    NgIf,
    FormsModule
  ],
  templateUrl: './admin-authors-form.component.html',
  styles: ``
})
export class AdminAuthorsFormComponent implements OnInit{

  constructor(private authorService : AuthorsService, private router : Router, private route: ActivatedRoute, private authService : AuthService) {
  }

  id : number = 0
  authorName : string = ''
  authorSurname : string = ''

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.id = +idParam;
        this.loadAuthorData();
      }
    });
  }

  loadAuthorData(): void {
    if (this.id != 0) {
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
          this.router.navigate(["/admin/library/authors"]);
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
  }

  save() {
    this.authService.GetUserRole().subscribe(role => {
      if (role === null) {
        this.router.navigate(['/login']);
      } else {
        if (this.id != 0) {
          this.UpdateAuthor()
        } else {
          this.AddAuthor()
        }
      }
    })
  }
}
