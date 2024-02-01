import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormUiComponent, Field } from '@angular-monorepo/shared/ui/dynamic-form-ui';
import { Store } from '@ngrx/store';
import { authActions, ngrxAuthQuery } from '@angular-monorepo/auth-data-access';


const structure: Field[] = [
  {
    type: 'TEXTAREA',
    name: 'comment',
    placeholder: 'Write a comment...',
    attrs: {
      rows: 3,
    },

  },
  {
    type: 'INPUT',
    name: 'nombre',
    placeholder: 'Escribe tu nombre',
    attrs: {
      rows: 3,
    },
  },
  {
    type: 'INPUT',
    name: 'apellido',
    placeholder: 'Escribe tu apellido',
    attrs: {
      rows: 3,
    },
  },
  {
    type: 'TEXTAREA',
    name: 'descripcion',
    placeholder: 'Escribi la descripcion del producto',
    attrs: {
      rows: 3,
    },

  },
];

@Component({
  selector: 'lib-feature-category',
  standalone: true,
  imports: [CommonModule, DynamicFormUiComponent],
  templateUrl: './feature-category.component.html',
  styleUrl: './feature-category.component.scss',
})
export class FeatureCategoryComponent implements OnInit {
  private readonly store = inject(Store);

  @Output() updateForm: EventEmitter<any> = new EventEmitter();


  data$ = '';
  touchedForm$ = '';

  structure$ = this.store.select(ngrxAuthQuery.selectStructure);

  ngOnInit() {
    this.store.dispatch(authActions.setStructure({ structure }));
  }
  // updateForm(changes: any) {
  //   // this.store.dispatch(formsActions.updateData({ data: changes }));
  // }
}
