import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {AdminEditBtnComponent} from "../admin-edit-btn/admin-edit-btn.component";
import {AdminDeleteBtnComponent} from "../admin-delete-btn/admin-delete-btn.component";
import {AuthService} from "../../services/AuthService";
import {LoadingComponent} from "../../user-front/loading/loading.component";
import {NgxPaginationModule} from "ngx-pagination";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-admin-accounts-table',
  standalone: true,
  imports: [
    NgClass,
    AdminEditBtnComponent,
    AdminDeleteBtnComponent,
    NgForOf,
    NgIf,
    LoadingComponent,
    NgxPaginationModule,
    FormsModule
  ],
  templateUrl: './admin-accounts-table.component.html',
  styles: ``
})
export class AdminAccountsTableComponent implements OnInit{

  constructor(private authService : AuthService, private router : Router) {
  }
  activeFilter : string = ''
  totalItems = 0;
  pageSize = 20;
  currentPage = 1;
  isLoading : boolean = true
  userData : User[] = []
  search : string = ''
  userCount : number = 0
  adminCount : number = 0
  allCount : number = 0


  ngOnInit() {
    this.getAllUsers()
    this.countAllRecords()
  }

  getAllUsers() {
    this.authService.GetAllUsers({
      role: this.activeFilter,
      search: this.search,
      page: this.currentPage - 1,
      size: this.pageSize
    }).subscribe({
      next: (response) => {
        this.userData = response.content
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
        this.getAllUsers();
      }
    })
  }

  handleFilter(filter : string) {
    this.activeFilter = filter
    this.getAllUsers()
  }

  handleSearch() {
    this.authService.GetUserRole().subscribe(role => {
      if (role === null) {
        this.router.navigate(['/login']);
      } else {
        this.getAllUsers();
      }
    })
  }

  countAllRecords() {
    this.authService.GetNumberOfAll().subscribe(count => this.allCount = count)
    this.authService.GetNumberOfAdmin().subscribe(count => this.adminCount = count)
    this.authService.GetNumberOfUser().subscribe(count => this.userCount = count)
  }

}

export interface User {
  userId: number
  username : string
  email : string
  role : Role
  creationDate: string
}

export interface Role {
  roleId : number
  role : string

}
