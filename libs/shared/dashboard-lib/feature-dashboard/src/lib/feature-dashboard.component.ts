import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'lib-feature-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, NgbModule, NgbCollapseModule],
  templateUrl: './feature-dashboard.component.html',
  styleUrl: './feature-dashboard.component.css',
})
export class FeatureDashboardComponent {
  public isCollapsed = true;
}
