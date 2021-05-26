import { combineReducers } from 'redux';
import { boardReducer } from './boardReducer';
import { themeReducer } from './themeReducer';

/*
    ==================
    Root Reducer
    =================
*/

export const rootReducer = combineReducers({
	theme: themeReducer,
	board: boardReducer,
});

/*
    ==================
    Get Reducer Type
    =================
*/
export type RootState = ReturnType<typeof rootReducer>;
