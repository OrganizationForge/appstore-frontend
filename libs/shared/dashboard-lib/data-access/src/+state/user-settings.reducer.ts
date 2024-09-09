// import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
// import { createReducer, on, Action } from '@ngrx/store';

// import * as UserSettingsActions from './user-settings.actions';
// import { UserSettingsEntity } from './user-settings.models';

// export const USER_SETTINGS_FEATURE_KEY = 'userSettings';

// export interface UserSettingsState extends EntityState<UserSettingsEntity> {
//   selectedId?: string | number; // which UserSettings record has been selected
//   loaded: boolean; // has the UserSettings list been loaded
//   error?: string | null; // last known error (if any)
// }

// export interface UserSettingsPartialState {
//   readonly [USER_SETTINGS_FEATURE_KEY]: UserSettingsState;
// }

// export const userSettingsAdapter: EntityAdapter<UserSettingsEntity> =
//   createEntityAdapter<UserSettingsEntity>();

// export const initialUserSettingsState: UserSettingsState =
//   userSettingsAdapter.getInitialState({
//     // set initial required properties
//     loaded: false,
//   });

// const reducer = createReducer(
//   initialUserSettingsState,
//   on(UserSettingsActions.initUserSettings, (state) => ({
//     ...state,
//     loaded: false,
//     error: null,
//   })),
//   on(UserSettingsActions.loadUserSettingsSuccess, (state, { userSettings }) =>
//     userSettingsAdapter.setAll(userSettings, { ...state, loaded: true })
//   ),
//   on(UserSettingsActions.loadUserSettingsFailure, (state, { error }) => ({
//     ...state,
//     error,
//   }))
// );

// export function userSettingsReducer(
//   state: UserSettingsState | undefined,
//   action: Action
// ) {
//   return reducer(state, action);
// }
import { createFeature, createReducer, on } from '@ngrx/store';
import { settingsActions } from './user-settings.actions';
import { ngrxSettingsInitialState } from './user-settings.models';

export const ngrxSettingsFeature = createFeature({
  name: 'ngrxSettings',
  reducer: createReducer(
    ngrxSettingsInitialState,
    on(settingsActions.getSettings, (state) => ({...state,})),
    on(settingsActions.postSettings, (state, action) => {
      state = {...state, wishlist: [...state.wishlist, action.wishlist] }
      localStorage.setItem('settings', JSON.stringify(state));
      return state;
    }),
    on(settingsActions.removeItemFromWishlist, (state, action) => {
      const wishlist = [...state.wishlist];
      const index = wishlist.findIndex(x => x.id === action.wishlist.id);
      wishlist.splice(index, 1);
      state = {...state, wishlist: wishlist }
      localStorage.setItem('settings', JSON.stringify(state));
      return state;
     }),
    on(settingsActions.getSettingsFailure, (state, action) => ({...state, error: action.error,})),
    on(settingsActions.loadSettings, (state, { settings }) => ({
      ...state,
      wishlist: settings.wishlist
  }))
  ),
});
