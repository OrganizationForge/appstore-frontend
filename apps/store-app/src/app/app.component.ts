import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '@angular-monorepo/footer';
import { HeaderComponent } from '@angular-monorepo/header';
import { ToastUiComponent } from "@angular-monorepo/shared/ui/toast-ui";

@Component({
  standalone: true,
  imports: [ RouterModule, HeaderComponent, FooterComponent, ToastUiComponent],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'store-app';
}
