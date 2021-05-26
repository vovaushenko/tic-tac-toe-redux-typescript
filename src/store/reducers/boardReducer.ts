import {
	BoardActionTypes,
	BoardState,
	BoardActions,
} from '../../types/boardTypes';

/*
    ==================
    Initial State
    =================
*/

const initialState: BoardState = {
	board: [
		['', '', '', ''],
		['', '', '', ''],
		['', '', '', ''],
		['', '', '', ''],
	],
	player: 'Player-1',
};

/*
      ==================
      Reducer
      =================
*/

export const boardReducer = (
	state: BoardState = initialState,
	action: BoardActions
) => {
	switch (action.type) {
		case BoardActionTypes.MAKE_TURN:
			return state;
		case BoardActionTypes.CHANGE_PLAYER:
			return {
				...state,
				player: state.player === 'Player-1' ? 'Player-2' : 'Player-1',
			};
		case BoardActionTypes.CHECK_FOR_VICTORY:
			return state;

		default:
			return state;
	}
};
