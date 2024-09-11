import {Component, OnInit} from '@angular/core';
import {AdminEditBtnComponent} from "../admin-edit-btn/admin-edit-btn.component";
import {AdminDeleteBtnComponent} from "../admin-delete-btn/admin-delete-btn.component";
import {AuthorsService} from "../../services/AuthorsService";
import {Author} from "../../user-front/home-page/home-page.component";
import {NgForOf, NgIf} from "@angular/common";
import {LoadingComponent} from "../../user-front/loading/loading.component";
import {NgxPaginationModule} from "ngx-pagination";
import {AuthService} from "../../services/AuthService";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-admin-authors-table',
  standalone: true,
  imports: [
    AdminEditBtnComponent,
    AdminDeleteBtnComponent,
    NgIf,
    LoadingComponent,
    NgxPaginationModule,
    NgForOf,
    FormsModule
  ],
  templateUrl: './admin-authors-table.component.html',
  styles: ``
})
export class AdminAuthorsTableComponent implements OnInit{
  constructor(private authorsService : AuthorsService, private authService : AuthService, private router : Router) {
  }

  ngOnInit() {
    this.getAllAuthors()
  }

  authorsData : Author[] = []
  search : string = ''
  isLoading : boolean = true
  totalItems = 0;
  pageSize = 20;
  currentPage = 1;

  getAllAuthors() {
    this.authorsService.GetAllAuthors({
      size: this.pageSize,
      page: this.currentPage - 1,
      search: this.search
    }).subscribe({
      next: (response) => {
        this.authorsData = response.content
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
        this.getAllAuthors();
      }
    })
  }

  handleSearch() {
    this.authService.GetUserRole().subscribe(role => {
      if (role === null) {
        this.router.navigate(['/login']);
      } else {
        this.getAllAuthors();
      }
    })
  }
}
