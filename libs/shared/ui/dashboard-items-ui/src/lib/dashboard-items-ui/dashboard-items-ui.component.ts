import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardItemsData, ProfileItemsData } from './data';

import { AuthStore, ngrxAuthQuery } from '@angular-monorepo/auth-data-access';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';



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

  currentUser$! : Observable<any>;

  private readonly store = inject(Store);




  ngOnInit(): void {
    this.dashboardItems = DashboardItemsData;
    this.profileItems = ProfileItemsData;


    this.currentUser$ = this.store.select(ngrxAuthQuery.selectData).pipe();

  }

  logout() {
    this.authStore.logout();
  }
}
