import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {BookStatesService} from "../../services/BookStatesService";
import {faSquareCheck} from "@fortawesome/free-solid-svg-icons/faSquareCheck";
import {faSquareCheck as farSquareCheck} from "@fortawesome/free-regular-svg-icons/faSquareCheck";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {NgSwitch, NgSwitchCase} from "@angular/common";
import {AuthService} from "../../services/AuthService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-status-icon',
  standalone: true,
  imports: [
    FaIconComponent,
    NgSwitch,
    NgSwitchCase
  ],

  templateUrl: './status-icon.component.html',
  styles: ``
})
export class StatusIconComponent implements OnInit{
  @Input() id : number = 0;
  status : string = "";

  protected readonly faSquareCheck = faSquareCheck;
  protected readonly farSquareCheck = farSquareCheck;

  constructor(private bookStatesService : BookStatesService,  private authService : AuthService, private router : Router) {
  }

  ngOnInit() {
    this.checkIfBookStateExist();
  }

  checkIfBookStateExist() {
    this.bookStatesService.CheckIfExistAndThenGet(this.id).subscribe({
      next: (response) => {
        this.status = response?.status.statusName ? response.status.statusName : "";
      }
    })
  }

  addWantToReadStatus(status : string) {

    this.authService.GetUserRole().subscribe(role => {
      if (role === null) {
        this.router.navigate(['/login']);
      } else {
        if (status === '') {
          this.bookStatesService.AddBookToStatus(this.id, "Want to read", null, null, null, null).subscribe({
            next: (response) => {
              this.status = response.status.statusName;
            }
          })
        } else {
          return
        }
      }
    })
  }

}
