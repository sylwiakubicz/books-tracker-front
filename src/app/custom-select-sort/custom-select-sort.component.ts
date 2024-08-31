import {Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild} from '@angular/core';
import {faArrowDown, faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-custom-select-sort',
  standalone: true,
  imports: [
    FaIconComponent,
    NgClass
  ],
  templateUrl: './custom-select-sort.component.html',
  styles: ``
})
export class CustomSelectSortComponent {
  @Output() sortSelected = new EventEmitter<string>();
  @Input() isMyBooks : boolean = false;

  isShow : Boolean = false;
  selectedOption: string = 'Sort';
  sort : string = 'asc';

  @ViewChild('dropdown', { static: false }) dropdown!: ElementRef;

  toggleDropdown() {
    this.isShow = !this.isShow;
  }

  selectOption(option: string, sort : string, sortSelected : string) {
    this.selectedOption = option;
    this.isShow = false;
    this.sort = sort;
    this.sortSelected.emit(sortSelected)
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (this.isShow && this.dropdown && !this.dropdown.nativeElement.contains(event.target)) {
      this.isShow = false;
    }
  }

  protected readonly faArrowUp = faArrowUp;
  protected readonly faArrowDown = faArrowDown;
}
