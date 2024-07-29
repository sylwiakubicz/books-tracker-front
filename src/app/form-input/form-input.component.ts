import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [],
  templateUrl: './form-input.component.html',
  styles: ``
})
export class FormInputComponent {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
}
