import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[libStatusColorDirectory]',
  standalone: true,
})
export class StatusColorDirectoryDirective {
  @Input() appStatusColor!: string;
  constructor(private el: ElementRef) {}
  ngOnChanges(changes: SimpleChanges): void {
    const status = changes['appStatusColor'].currentValue;
    let colorClass: string;

    switch (status) {
      case 'pending':
        colorClass = 'bg-warning';
        break;
      case 'completed':
        colorClass = 'bg-success';
        break;
      case 'cancelled':
        colorClass = 'bg-danger';
        break;
      default:
        colorClass = ''; // Default color (optional)
    }

    this.el.nativeElement.classList.add(colorClass);
  }
}
