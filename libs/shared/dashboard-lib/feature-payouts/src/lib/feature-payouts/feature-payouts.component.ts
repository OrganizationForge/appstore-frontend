import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { payout } from './data';

@Component({
  selector: 'lib-feature-payouts',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './feature-payouts.component.html',
  styleUrl: './feature-payouts.component.scss',
})
export class FeaturePayoutsComponent implements OnInit {
  payouts: any;


  ngOnInit(): void {

    // When the user clicks on the button, scroll to the top of the document
    document.documentElement.scrollTop = 0;

    //Fetch Data
    this.payouts = payout;
  }
}
