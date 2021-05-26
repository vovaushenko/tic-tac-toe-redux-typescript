import {
  ThemeAction,
  ThemeState,
  ThemeActionTypes,
} from '../../types/themeMode';

/*
    ==================
    Initial State
    =================
*/

const initialState: ThemeState = {
  theme: window.localStorage.getItem('theme') || 'dark',
};

/*
      ==================
      Reducer
      =================
*/

export const themeReducer = (
  state: ThemeState = initialState,
  action: ThemeAction
) => {
  switch (action.type) {
    case ThemeActionTypes.CHANGE_THEME:
      const newThemeMode = state.theme === 'dark' ? 'light' : 'dark';
      return { ...state, theme: newThemeMode };

    default:
      return state;
  }
};
