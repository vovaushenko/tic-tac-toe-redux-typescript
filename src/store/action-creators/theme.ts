import { Dispatch } from 'react';
import { ThemeActionTypes, ThemeAction } from '../../types/themeMode';

export const changeThemeMode = () => {
  return (dispatch: Dispatch<ThemeAction>, getState: any) => {
    dispatch({ type: ThemeActionTypes.CHANGE_THEME });

    const {
      theme: { theme },
    } = getState();

    window.localStorage.setItem('theme', theme);
  };
};
