import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-submit-btn',
  standalone: true,
  imports: [],
  templateUrl: './submit-btn.component.html',
  styles: ``
})
export class SubmitBtnComponent {
  @Input() buttonText: string = 'Click me';

  @Output() buttonClick : EventEmitter<void> = new EventEmitter<void>();

  onClick() {
    this.buttonClick.emit();
  }
}
