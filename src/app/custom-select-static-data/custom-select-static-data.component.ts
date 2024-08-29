import {Component, EventEmitter, Output} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-custom-select-static-data',
  standalone: true,
  imports: [
    FaIconComponent,
    NgClass
  ],
  templateUrl: './custom-select-static-data.component.html',
  styles: ``
})
export class CustomSelectStaticDataComponent {
  @Output() statusSelected = new EventEmitter<string>

  isShow : Boolean = false;
  selectedOption: string = 'Status';

  toggleDropdown() {
    this.isShow = !this.isShow;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.isShow = false;
    this.statusSelected.emit(option)
  }

}
