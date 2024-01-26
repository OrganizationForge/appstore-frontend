import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "@angular-monorepo/header";

@Component({
  standalone: true,
  imports: [ RouterModule, HeaderComponent],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'library-app';
}
