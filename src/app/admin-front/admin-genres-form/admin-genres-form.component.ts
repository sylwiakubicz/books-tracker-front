import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/AuthService";
import {Genre} from "../../user-front/home-page/home-page.component";
import {GenresService} from "../../services/GenresService";

@Component({
  selector: 'app-admin-genres-form',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './admin-genres-form.component.html',
  styles: ``
})
export class AdminGenresFormComponent implements OnInit{
  constructor(private genreService : GenresService, private router : Router, private route: ActivatedRoute, private authService : AuthService) {
  }

  id : number = 0
  genre : string = ''

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.id = +idParam;
        this.loadGenresData();
      }
    });
  }

  loadGenresData(): void {
    if (this.id != 0) {
      this.genreService.GetGenreById(this.id).subscribe({
        next: (genre: Genre) => {
          this.genre = genre.name;
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }

  AddGenre() {
    this.genreService.AddGenre(this.genre).subscribe({
        next: (response) => {
          this.router.navigate(['/admin/library/genres']);
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
  }

  UpdateGenre() {
    this.genreService.UpdateGenre(this.id, this.genre).subscribe({
        next: (response) => {
          this.router.navigate(["/admin/library/genres"]);
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
          this.UpdateGenre()
        } else {
          this.AddGenre()
        }
      }
    })
  }
}
