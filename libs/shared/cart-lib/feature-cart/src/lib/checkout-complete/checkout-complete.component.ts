import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-checkout-complete',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './checkout-complete.component.html',
  styleUrl: './checkout-complete.component.scss',
})
export class CheckoutCompleteComponent {}
