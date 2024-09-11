import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardItemsData, ProfileItemsData } from './data';


@Component({
  selector: 'lib-dashboard-items-ui',
  standalone: true,
  imports: [CommonModule, NgbCollapseModule, RouterModule],
  templateUrl: './dashboard-items-ui.component.html',
  styleUrl: './dashboard-items-ui.component.scss',
})
export class DashboardItemsUiComponent implements OnInit {


  @Input() isDropdown = true;
  public isCollapsed = true;

  dashboardItems: any;
  profileItems: any;

  ngOnInit(): void {
    this.dashboardItems = DashboardItemsData;
    this.profileItems = ProfileItemsData;
  }
}
