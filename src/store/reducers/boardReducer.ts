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
	winner: '',
	turn: 0,
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
			console.log(state.turn);
			return { ...state, board: newBoard, turn: state.turn + 1 };

		case BoardActionTypes.CHECK_FOR_VICTORY:
			const winningCombinations = [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
				[0, 4, 8],
				[2, 4, 6],
			];

			for (let [id1, id2, id3] of winningCombinations) {
				if (
					state.board[id1] &&
					state.board[id1] === state.board[id2] &&
					state.board[id2] === state.board[id3]
				) {
					return { ...state, winner: state.player };
				}
			}

			return state;

		default:
			return state;
	}
};
