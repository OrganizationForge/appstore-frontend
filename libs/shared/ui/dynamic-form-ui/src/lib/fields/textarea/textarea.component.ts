import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Field } from '../../forms.interfaces';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'lib-textarea',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
})
export class TextareaComponent {
  @Input() field!: Field;
  @Input() group!: FormGroup;
}
