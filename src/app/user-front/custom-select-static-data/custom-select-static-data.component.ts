import {Component, ElementRef, EventEmitter, HostListener, Output, ViewChild} from '@angular/core';
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

  @ViewChild('dropdown', { static: false }) dropdown!: ElementRef;

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

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (this.isShow && this.dropdown && !this.dropdown.nativeElement.contains(event.target)) {
      this.isShow = false;
    }
  }

}
