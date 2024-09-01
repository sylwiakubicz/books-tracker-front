import {Component, Input} from '@angular/core';
import {BookStatesService} from "../../services/BookStatesService";
import {AuthService} from "../../services/AuthService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-delete-status-option',
  standalone: true,
  imports: [],
  templateUrl: './delete-status-option.component.html',
  styles: ``
})
export class DeleteStatusOptionComponent {
  @Input() book_id : number = 0;
  @Input() status : string = ''

  constructor(private bookStatesService : BookStatesService, private authService : AuthService, private router : Router) {
  }

  deleteFromStatus() {
    this.authService.GetUserRole().subscribe(role => {
      if (role === null) {
        this.router.navigate(['/login']);
      }
      else {
        this.bookStatesService.DeleteBookState(this.book_id).subscribe(() => window.location.reload())
      }
    })
  }

}
