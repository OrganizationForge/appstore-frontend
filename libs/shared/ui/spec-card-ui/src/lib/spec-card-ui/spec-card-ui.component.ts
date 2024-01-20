import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-spec-card-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spec-card-ui.component.html',
  styleUrl: './spec-card-ui.component.scss',
})
export class SpecCardUiComponent {
@Input() dataSpec : any;

  // dataSpec = {
  //   title: 'General specs',
  //   specs: [
  //     { nameSpec: 'Model', value: 'Amazfit Smartwatch', },
  //     { nameSpec: 'Gender', value: 'Unisex', },
  //     { nameSpec: 'Smartphone app', value: 'Amazfit Watch', },
  //     { nameSpec: 'OS campitibility', value: 'Android / iOS', },
  //   ]
  // }
}
