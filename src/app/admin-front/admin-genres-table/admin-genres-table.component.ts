import {Component, OnInit} from '@angular/core';
import {AdminDeleteBtnComponent} from "../admin-delete-btn/admin-delete-btn.component";
import {AdminEditBtnComponent} from "../admin-edit-btn/admin-edit-btn.component";
import {FormsModule} from "@angular/forms";
import {LoadingComponent} from "../../user-front/loading/loading.component";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {Genre} from "../../user-front/home-page/home-page.component";
import {AuthService} from "../../services/AuthService";
import {Router} from "@angular/router";
import {GenresService} from "../../services/GenresService";

@Component({
  selector: 'app-admin-genres-table',
  standalone: true,
    imports: [
        AdminDeleteBtnComponent,
        AdminEditBtnComponent,
        FormsModule,
        LoadingComponent,
        NgForOf,
        NgIf,
        NgxPaginationModule
    ],
  templateUrl: './admin-genres-table.component.html',
  styles: ``
})
export class AdminGenresTableComponent implements OnInit{
  constructor(private authService : AuthService, private router : Router, private genreService : GenresService) {
  }

  ngOnInit() {
    this.getAllGenres()
  }

  genresData : Genre[] = []
  search : string = ''
  isLoading : boolean = true
  totalItems = 0;
  pageSize = 20;
  currentPage = 1;

  getAllGenres() {
    this.genreService.GetAllGenresPages(this.currentPage - 1,this.pageSize , this.search).subscribe({
      next: (response) => {
        this.genresData = response.content
        this.totalItems = response.totalElements
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false
      }
    })
  }

  pageChanged(page : number) {
    this.currentPage = page
    this.authService.GetUserRole().subscribe(role => {
      if (role === null) {
        this.router.navigate(['/login']);
      } else {
        window.scrollTo(0, 0);
        this.getAllGenres();
      }
    })
  }

  handleSearch() {
    this.authService.GetUserRole().subscribe(role => {
      if (role === null) {
        this.router.navigate(['/login']);
      } else {
        this.getAllGenres();
      }
    })
  }

}
