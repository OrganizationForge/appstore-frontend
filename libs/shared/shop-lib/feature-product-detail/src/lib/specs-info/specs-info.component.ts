import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecCardUiComponent } from '@angular-monorepo/shared/ui/spec-card-ui';

@Component({
  selector: 'lib-specs-info',
  standalone: true,
  imports: [CommonModule, SpecCardUiComponent],
  templateUrl: './specs-info.component.html',
  styleUrl: './specs-info.component.scss',
})
export class SpecsInfoComponent {

  producSpecs = [
    {
      title: 'General specs',
      specs: [
        { nameSpec: 'Model', value: 'Amazfit Smartwatch', },
        { nameSpec: 'Gender', value: 'Unisex', },
        { nameSpec: 'Smartphone app', value: 'Amazfit Watch', },
        { nameSpec: 'OS campitibility', value: 'Android / iOS', },
      ]
    },
    {
      title: 'General specs',
      specs: [
        { nameSpec: 'Model', value: 'Amazfit Smartwatch', },
        { nameSpec: 'Gender', value: 'Unisex', },
        { nameSpec: 'Smartphone app', value: 'Amazfit Watch', },
        { nameSpec: 'OS campitibility', value: 'Android / iOS', },
      ]
    },
    {
      title: 'General specs',
      specs: [
        { nameSpec: 'Model', value: 'Amazfit Smartwatch', },
        { nameSpec: 'Gender', value: 'Unisex', },
        { nameSpec: 'Smartphone app', value: 'Amazfit Watch', },
        { nameSpec: 'OS campitibility', value: 'Android / iOS', },
      ]
    },
    {
      title: 'General specs',
      specs: [
        { nameSpec: 'Model', value: 'Amazfit Smartwatch', },
        { nameSpec: 'Gender', value: 'Unisex', },
        { nameSpec: 'Smartphone app', value: 'Amazfit Watch', },
        { nameSpec: 'OS campitibility', value: 'Android / iOS', },
      ]
    },
    {
      title: 'General specs',
      specs: [
        { nameSpec: 'Model', value: 'Amazfit Smartwatch', },
        { nameSpec: 'Gender', value: 'Unisex', },
        { nameSpec: 'Smartphone app', value: 'Amazfit Watch', },
        { nameSpec: 'OS campitibility', value: 'Android / iOS', },
      ]
    },
    {
      title: 'General specs',
      specs: [
        { nameSpec: 'Model', value: 'Amazfit Smartwatch', },
        { nameSpec: 'Gender', value: 'Unisex', },
        { nameSpec: 'Smartphone app', value: 'Amazfit Watch', },
        { nameSpec: 'OS campitibility', value: 'Android / iOS', },
      ]
    },
    {
      title: 'General specs',
      specs: [
        { nameSpec: 'Model', value: 'Amazfit Smartwatch', },
        { nameSpec: 'Gender', value: 'Unisex', },
        { nameSpec: 'Smartphone app', value: 'Amazfit Watch', },
        { nameSpec: 'OS campitibility', value: 'Android / iOS', },
      ]
    },
    {
      title: 'Battery',
      specs: [
        { nameSpec: 'Dimensions', value: '195 x 20 mm', },
        { nameSpec: 'Weight', value: '32 g', },
      ]
    }
  ]

// dataSpec = {
//     title: 'General specs',
//     specs: [
//       { nameSpec: 'Model', value: 'Amazfit Smartwatch', },
//       { nameSpec: 'Gender', value: 'Unisex', },
//       { nameSpec: 'Smartphone app', value: 'Amazfit Watch', },
//       { nameSpec: 'OS campitibility', value: 'Android / iOS', },
//     ]
//   }
}
