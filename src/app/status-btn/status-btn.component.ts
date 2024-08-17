import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {SubmitBtnComponent} from "../submit-btn/submit-btn.component";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

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

    } else {
      this.status = "Want to read"
    }
  }

  statusText: string = "Want to read";
  showStatuses : boolean = false;

  handleShowStatuses() {
    this.showStatuses = !this.showStatuses;
  }

  handleSetStatus(status : string) {
    this.statusText = status;
    this.showStatuses = false;
  }

}
