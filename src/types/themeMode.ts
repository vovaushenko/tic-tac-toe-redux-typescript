/*
        === Main Interface ===
*/

export interface ThemeState {
  theme: string;
}

/*
        === Action Types ===
*/

export enum ThemeActionTypes {
  CHANGE_THEME = 'CHANGE_THEME',
}

/*
        === Action Interfaces ===
*/

interface ChangeThemeAction {
  type: ThemeActionTypes.CHANGE_THEME;
}

/*
        === Combined Action Interface ===
*/

export type ThemeAction = ChangeThemeAction;
