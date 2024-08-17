import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {SubmitBtnComponent} from "../submit-btn/submit-btn.component";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faSquareCheck as farSquareCheck} from "@fortawesome/free-regular-svg-icons/faSquareCheck";

@Component({
  selector: 'app-status-btn',
  standalone: true,
  imports: [
    SubmitBtnComponent,
    FaIconComponent
  ],
  templateUrl: './status-btn.component.html',
  styles: ``
})
export class StatusBtnComponent implements  OnChanges{
  @Input() status : string | undefined;
  statusText: string = "Want to read";
  showStatuses : boolean = false;

  protected readonly farSquareCheck = farSquareCheck;

  ngOnChanges() {
    if (this.status) {
      if (this.status == 'want to read') {
        this.statusText = "Want to read";
      }
      if (this.status == 'in progress') {
        this.statusText = "Currently reading"
      }
      if (this.status == 'read') {
        this.statusText = "Read";
      }
    }
  }

  handleShowStatuses() {
    this.showStatuses = !this.showStatuses;
  }

  handleSetStatus(status : string) {
    this.statusText = status;
    this.showStatuses = false;
  }
}
