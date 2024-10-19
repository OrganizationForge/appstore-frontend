import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthStore, ngrxAuthQuery } from '@angular-monorepo/auth-data-access';
import { DashboardItemsUiComponent } from "@angular-monorepo/shared/ui/dashboard-items-ui";
import { Store } from '@ngrx/store';


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
  private readonly store = inject(Store);

  // isAuthenticated$ = this.authStore.loggedIn;
  isAuthenticated$ =   this.store.select(ngrxAuthQuery.selectLoggedIn).pipe();

}
