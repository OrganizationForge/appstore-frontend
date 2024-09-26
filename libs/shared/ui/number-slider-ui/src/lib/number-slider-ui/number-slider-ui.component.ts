import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeContext, NgxSliderModule, Options } from 'ngx-slider-v2';

@Component({
  selector: 'lib-number-slider-ui',
  standalone: true,
  imports: [CommonModule, NgxSliderModule],
  templateUrl: './number-slider-ui.component.html',
  styleUrl: './number-slider-ui.component.scss',
})
export class NumberSliderUiComponent {
  @Input() title!: string;
  @Input() minValue!: number;
  @Input() maxValue!: number;
  @Input() floor: number = 0;
  @Input() ceil: number = 4000;
  @Input() step!: number;
  @Input() returnString!: string;
  @Output() send: EventEmitter<number[]> = new EventEmitter();

  options: Options = {
    floor: this.floor,
    ceil: this.ceil,
    step: this.step,
    translate: (value: number): string => {
      return this.returnString + value;
    }
  };

  valueChange(value: number, boundary: boolean): void {
    if (boundary) {
      this.minValue = value;
    } else {
      this.maxValue = value;
    }
  }

  onUserChangeEnd(changeContext: ChangeContext): void {
    this.send.emit([changeContext.value, changeContext.highValue != undefined ?  changeContext.highValue : this.maxValue]);
  }

}
