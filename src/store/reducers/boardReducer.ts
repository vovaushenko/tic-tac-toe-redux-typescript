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
	board: ['', '', '', '', '', '', '', '', ''],
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
		case BoardActionTypes.CHANGE_PLAYER:
			return {
				...state,
				player: state.player === 'Player-1' ? 'Player-2' : 'Player-1',
			};
		case BoardActionTypes.MAKE_TURN:
			let mark = state.player === 'Player-1' ? 'X' : 'O';

			let newBoard = state.board.map((cell, id) =>
				id === action.payload - 1 ? mark : cell
			);
			return { ...state, board: newBoard };
		case BoardActionTypes.CHECK_FOR_VICTORY:
			return state;

		default:
			return state;
	}
};
