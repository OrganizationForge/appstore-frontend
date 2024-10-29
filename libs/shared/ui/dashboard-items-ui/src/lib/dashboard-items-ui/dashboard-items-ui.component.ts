import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardItemsData, ProfileItemsData } from './data';

import { authActions, AuthStore, LocalStorageJwtService, ngrxAuthQuery, User } from '@angular-monorepo/auth-data-access';
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
  private readonly localStorageService = inject(LocalStorageJwtService);
  private readonly router = inject(Router);




  ngOnInit(): void {
    this.dashboardItems = DashboardItemsData;
    this.profileItems = ProfileItemsData;


    this.currentUser$ = this.store.select(ngrxAuthQuery.selectData).pipe();

  }

  logout() {
    this.authStore.logout();

    // const emptyUser: User = {
    //   userName: '',
    //   nombre: '',
    //   apellido: '',
    //   email: '',
    //   jwToken: '',
    //   isVerified: false,
    //   roles: [],
    //   urlImage: '',
    // };


    // this.store.dispatch(authActions.setData({data: emptyUser, loggedIn: false}));

    // this.localStorageService.removeItem();
    // this.router.navigateByUrl('home');

  }
}
