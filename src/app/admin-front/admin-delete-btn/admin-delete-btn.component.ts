import {Component, Input} from '@angular/core';
import {AuthorsService} from "../../services/AuthorsService";
import {AuthService} from "../../services/AuthService";
import {Router} from "@angular/router";
import {BooksService} from "../../services/BooksService";

@Component({
  selector: 'app-admin-delete-btn',
  standalone: true,
  imports: [],
  templateUrl: './admin-delete-btn.component.html',
  styles: ``
})
export class AdminDeleteBtnComponent {
  constructor(private authorsService : AuthorsService, private authService : AuthService, private router :Router, private booksService : BooksService) {
  }

  @Input() id : number = 0;
  @Input() tableName : string = ''

  handleDelete() {
    console.log(this.id)
    this.authService.GetUserRole().subscribe(role => {
      if (role === null) {
        this.router.navigate(['/login']);
      } else {
        if (this.tableName === 'authors') {
          this.authorsService.DeleteAuthor(this.id).subscribe({
            next: () => {
              location.reload()
            },
            error: (error) => {
              console.log(error)
            }
          })
        }
        else if (this.tableName === 'accounts') {
          this.authService.DeleteUser(this.id).subscribe({
            next: () => {
              location.reload()
            },
            error: (error) => {
              console.log(error)
            }
          })
        }
        else if (this.tableName === 'books') {
          this.booksService.DeleteUser(this.id).subscribe({
            next: () => {
              location.reload()
            },
            error: (error) => {
              console.log(error)
            }
          })
        }
      }
    })
  }

}
