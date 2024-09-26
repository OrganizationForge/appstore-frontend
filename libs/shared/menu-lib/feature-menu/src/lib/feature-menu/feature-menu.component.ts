import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MENU, MenuItem } from '@angular-monorepo/menu-data-access';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-feature-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './feature-menu.component.html',
  styleUrl: './feature-menu.component.css',
})
export class FeatureMenuComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    // Menu Items
    this.menuItems = MENU;

    this.initActiveMenu();
  }

  /**
   * Returns true or false if given menu item has child or not
   * @param item menuItem
   */
  hasItems(item: MenuItem) {
    return item.subItems !== undefined ? item.subItems.length > 0 : false;
  }

  /**
  * On menu click
  */
  onMenuClick(event: any) {
    console.log('hkj')
    const target = event.target as HTMLElement;

    if (target && target.nextElementSibling instanceof HTMLElement) {
      const nextElementSibling = target.nextElementSibling as HTMLElement;

      if (nextElementSibling) {
        const parentElement = target.parentElement as HTMLElement;

        if (parentElement) {
          parentElement.classList.remove('show');
        }

        nextElementSibling.classList.toggle('show');
      }
    }
  }

  toggleItem(event: any) {
    const isCurrentMenuId = event.target.closest('a.menu-link');
    const ul = document.getElementById("navbar-nav");
    if (ul) {
      const iconItems = Array.from(ul.getElementsByTagName("a"));
      const activeIconItems = iconItems.filter((x: any) => x.classList.contains("active"));
      activeIconItems.forEach((item: any) => {
        item.setAttribute('aria-expanded', "false")
        item.classList.remove("active");
      });
    }
    if (isCurrentMenuId) { }
  }

  toggleSubItem(event: any) {
    const target = event.target as HTMLElement;

    if (target && target.nextElementSibling instanceof HTMLElement) {
      const nextElementSibling = target.nextElementSibling as HTMLElement;
      if (nextElementSibling.classList.contains("show")) {
        nextElementSibling.classList.remove("show");
      } else {
        nextElementSibling.classList.add("show");
      }
    }
  };

  // Load Wise Active class set
  initActiveMenu() {
    setTimeout(() => {
      const pathName = window.location.pathname;
      const ul = document.getElementById("navbar-nav");
      if (ul) {
        const items = Array.from(ul.querySelectorAll("a.sublink"));
        const activeItems = items.filter((x: any) => x.classList.contains("active"));
        const matchingMenuItem = items.find((x: any) => {
          return x.pathname === pathName;
        });
        if (matchingMenuItem != undefined) {
          this.activateParentDropdown(matchingMenuItem);
        }
      }
    }, 0);
  }

  // remove active items of two-column-menu
  activateParentDropdown(item: any) {
    item.classList.add('active')
    const parentCollapseDiv = item.closest(".collapse.menu-dropdown");
    if (parentCollapseDiv) {
      // to set aria expand true remaining
      parentCollapseDiv.classList.add("show");
      parentCollapseDiv.parentElement.children[0].classList.add("active");
      if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")) {
        parentCollapseDiv.parentElement.closest(".collapse").classList.add("show");
        if (parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling)
          parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling?.classList.add("active");
      }
    }
  }
}
