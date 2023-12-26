import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'books',
    loadComponent: () =>
      import('@angular-monorepo/book-list').then((m) => m.BookListComponent),
  },

];
