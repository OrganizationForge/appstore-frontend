import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardItemsData, ProfileItemsData } from './data';

import { AuthStore } from '@angular-monorepo/auth-data-access';



@Component({
  selector: 'lib-dashboard-items-ui',
  standalone: true,
  imports: [CommonModule, NgbCollapseModule, RouterModule],
  templateUrl: './dashboard-items-ui.component.html',
  styleUrl: './dashboard-items-ui.component.scss',
})
export class DashboardItemsUiComponent implements OnInit {

  private readonly authStore = inject(AuthStore);
  @Input() isDropdown = true;
  public isCollapsed = true;

  dashboardItems: any;
  profileItems: any;

  ngOnInit(): void {
    this.dashboardItems = DashboardItemsData;
    this.profileItems = ProfileItemsData;
  }

  logout() {
    this.authStore.logout();
  }
}
