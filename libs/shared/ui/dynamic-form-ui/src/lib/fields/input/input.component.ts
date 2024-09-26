import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Field } from '../../forms.interfaces';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'lib-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() field!: Field;
  @Input() group!: FormGroup;
}
