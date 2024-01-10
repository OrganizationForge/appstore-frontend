import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "@angular-monorepo/header";
import { CardComponent } from "@angular-monorepo/card";

@Component({
  standalone: true,
  imports: [ RouterModule, HeaderComponent, CardComponent],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'library-app';
}
