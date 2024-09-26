import { ComponentRef, Directive, Input, OnChanges, OnInit, Type, ViewContainerRef, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { InputComponent } from '../fields/input/input.component';
import { TextareaComponent } from '../fields/textarea/textarea.component';
import { Field } from '../forms.interfaces';

type Components = InputComponent | TextareaComponent;

const componentsMapper: { [key: string]: Type<Components> } = {
  INPUT: InputComponent,
  TEXTAREA: TextareaComponent,
};

@Directive({
  selector: '[libAppDynamicField]',
  standalone: true,
})
export class DynamicFieldDirective implements OnInit, OnChanges {
  private readonly container = inject(ViewContainerRef);

  @Input() field!: Field;
  @Input() group!: FormGroup;
  component!: ComponentRef<Components>;

  ngOnChanges() {
    if (this.component) {
      this.component.instance.field = this.field;
      this.component.instance.group = this.group;
    }
  }

  ngOnInit() {
    this.component = this.container.createComponent(componentsMapper[this.field.type]);
    this.component.instance.field = this.field;
    this.component.instance.group = this.group;
  }
}
