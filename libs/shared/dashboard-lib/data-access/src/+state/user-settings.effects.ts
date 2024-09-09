// import { Injectable, inject } from '@angular/core';
// import { createEffect, Actions, ofType } from '@ngrx/effects';
// import { switchMap, catchError, of } from 'rxjs';
// import * as UserSettingsActions from './user-settings.actions';
// import * as UserSettingsFeature from './user-settings.reducer';

// @Injectable()
// export class UserSettingsEffects {
//   private actions$ = inject(Actions);

//   init$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(UserSettingsActions.initUserSettings),
//       switchMap(() =>
//         of(UserSettingsActions.loadUserSettingsSuccess({ userSettings: [] }))
//       ),
//       catchError((error) => {
//         console.error('Error', error);
//         return of(UserSettingsActions.loadUserSettingsFailure({ error }));
//       })
//     )
//   );
// }
