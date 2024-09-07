import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {AdminEditBtnComponent} from "../admin-edit-btn/admin-edit-btn.component";
import {AdminDeleteBtnComponent} from "../admin-delete-btn/admin-delete-btn.component";
import {AuthService} from "../../services/AuthService";

@Component({
  selector: 'app-admin-accounts-table',
  standalone: true,
  imports: [
    NgClass,
    AdminEditBtnComponent,
    AdminDeleteBtnComponent,
    NgForOf
  ],
  templateUrl: './admin-accounts-table.component.html',
  styles: ``
})
export class AdminAccountsTableComponent implements OnInit{

  constructor(private authService : AuthService) {
  }
  activeFilter : string = ''
  totalItems = 0;
  pageSize = 20;
  currentPage = 1;
  isLoading : boolean = true
  userData : User[] = []


  ngOnInit() {
    this.getAllUsers()
  }

  getAllUsers() {
    this.authService.GetAllUsers({
      role: 'ROLE_USER',
      page: this.currentPage - 1,
      size: this.pageSize
    }).subscribe({
      next: (response) => {
        this.userData = response.content
        console.log(this.userData)
        this.totalItems = response.totalElements
        this.isLoading = false;
      },
      error: (error) => {
        console.log("Failed: ", error)
        this.isLoading = false
      }
    })
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
