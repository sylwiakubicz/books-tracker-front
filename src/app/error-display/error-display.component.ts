import {Component, Input} from "@angular/core";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-error-display',
  standalone: true,
  imports: [
    NgIf
  ],
  template: `
    <div *ngIf="errorMessage" class="error-message text-red-500 text-center">
      {{ errorMessage }}
    </div>
  `
})
export class ErrorDisplayComponent {
  @Input() errorMessage: string | null = null;
}
