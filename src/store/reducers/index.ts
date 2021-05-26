import { combineReducers } from 'redux';
import { themeReducer } from './themeReducer';

/*
    ==================
    Root Reducer
    =================
*/

export const rootReducer = combineReducers({
	theme: themeReducer,
});

/*
    ==================
    Get Reducer Type
    =================
*/
export type RootState = ReturnType<typeof rootReducer>;
