import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HeaderComponent } from "@angular-monorepo/header";
import { CardComponent } from "@angular-monorepo/card";

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule,HeaderComponent, CardComponent],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'store-app';
}
