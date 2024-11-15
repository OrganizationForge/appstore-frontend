import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthStore } from '@angular-monorepo/auth-data-access';
import { DashboardItemsUiComponent } from "@angular-monorepo/shared/ui/dashboard-items-ui";


@Component({
  selector: 'lib-feature-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, NgbModule, NgbCollapseModule, DashboardItemsUiComponent],
  templateUrl: './feature-dashboard.component.html',
  styleUrl: './feature-dashboard.component.css',
})
export class FeatureDashboardComponent {
  public isCollapsed = true;

  private readonly authStore = inject(AuthStore);
  isAuthenticated$ = this.authStore.loggedIn;
}
