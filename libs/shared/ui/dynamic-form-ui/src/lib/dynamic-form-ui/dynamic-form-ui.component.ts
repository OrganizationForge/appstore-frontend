import { Component, DestroyRef, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable, combineLatest, debounceTime, filter, map, tap } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Field } from '../forms.interfaces';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DynamicFieldDirective } from './dynamic-field.directive';

@Component({
  selector: 'lib-dynamic-form-ui',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DynamicFieldDirective, AsyncPipe],
  templateUrl: './dynamic-form-ui.component.html',
  styleUrl: './dynamic-form-ui.component.scss',
})
export class DynamicFormUiComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly destroyRef = inject(DestroyRef);

  @Input() structure$!: Observable<Field[]>;
  @Input() data$!: Observable<any>;
  @Input() touchedForm$!: Observable<boolean>;
  @Output() updateForm: EventEmitter<any> = new EventEmitter();
  form!: FormGroup;

  ngOnInit() {
    this.structure$
      .pipe(
        map(this.formBuilder),
        tap((f) => (this.form = f)),
        tap((f) => this.listenFormChanges(f)),
        (f$) => combineLatest([f$, this.data$]),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(this.patchValue);

    if (this.touchedForm$) {
      this.touchedForm$
        .pipe(
          filter((t) => !t && !!this.form),
          takeUntilDestroyed(this.destroyRef),
        )
        .subscribe(() => this.form.reset());
    }
  }

  private formBuilder = (structure: Field[]): FormGroup => {
    const group = this.fb.group({});
    structure.forEach((field) => group.addControl(field.name, this.control(field)));
    return group;
  };

  private control = (field: Field): FormControl => {
    return this.fb.control('', field.validator);
  };

  private patchValue = ([form, data]: [FormGroup, any]) => {
    data ? form.patchValue(data, { emitEvent: false }) : form.patchValue({}, { emitEvent: false });
  };

  private listenFormChanges(form: FormGroup) {
    form.valueChanges
      .pipe(debounceTime(100), takeUntilDestroyed(this.destroyRef))
      .subscribe((changes: any) => this.updateForm.emit(changes));
  }
}
