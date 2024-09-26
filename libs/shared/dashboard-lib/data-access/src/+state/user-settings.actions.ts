import { createActionGroup, props } from '@ngrx/store';
import { Product } from '@angular-monorepo/shop-data-access';

// export const initUserSettings = createAction('[UserSettings Page] Init');

// export const loadUserSettingsSuccess = createAction(
//   '[UserSettings/API] Load UserSettings Success',
//   props<{ userSettings: UserSettingsEntity[] }>()
// );

// export const loadUserSettingsFailure = createAction(
//   '[UserSettings/API] Load UserSettings Failure',
//   props<{ error: any }>()
// );


export const settingsActions = createActionGroup({
  source: 'Settings',
  events: {
    getSettings: props<{ data: any }>(),
    postSettings: props<{ wishlist: Product }>(),
    removeItemFromWishlist: props<{ wishlist: Product }>(),
    getSettingsFailure: props<{ error: string }>(),
    loadSettings:  props<{ settings: any }>()
  },
});
