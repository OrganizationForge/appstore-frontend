// import { createFeatureSelector, createSelector } from '@ngrx/store';
// import {
//   USER_SETTINGS_FEATURE_KEY,
//   UserSettingsState,
//   userSettingsAdapter,
// } from './user-settings.reducer';

// // Lookup the 'UserSettings' feature state managed by NgRx
// export const selectUserSettingsState = createFeatureSelector<UserSettingsState>(
//   USER_SETTINGS_FEATURE_KEY
// );

// const { selectAll, selectEntities } = userSettingsAdapter.getSelectors();

// export const selectUserSettingsLoaded = createSelector(
//   selectUserSettingsState,
//   (state: UserSettingsState) => state.loaded
// );

// export const selectUserSettingsError = createSelector(
//   selectUserSettingsState,
//   (state: UserSettingsState) => state.error
// );

// export const selectAllUserSettings = createSelector(
//   selectUserSettingsState,
//   (state: UserSettingsState) => selectAll(state)
// );

// export const selectUserSettingsEntities = createSelector(
//   selectUserSettingsState,
//   (state: UserSettingsState) => selectEntities(state)
// );

// export const selectSelectedId = createSelector(
//   selectUserSettingsState,
//   (state: UserSettingsState) => state.selectedId
// );

// export const selectEntity = createSelector(
//   selectUserSettingsEntities,
//   selectSelectedId,
//   (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
// );
import { ngrxSettingsFeature } from "./user-settings.reducer";

export const { selectNgrxSettingsState, selectWishlist, selectError} = ngrxSettingsFeature;

export const ngrxCartQuery = {
  selectNgrxSettingsState,
  selectWishlist,
  selectError
};
