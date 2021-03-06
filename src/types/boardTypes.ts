/*
        === Main Interface ===
*/
export interface BoardState {
	board: string[];
	player: 'Player-1' | 'Player-2';
	turn: number;
	winner: '' | 'Player-1' | 'Player-2';
	winners: string[];
}

/*
        === Action Types ===
*/
export enum BoardActionTypes {
	MAKE_TURN = 'MAKE_TURN',
	CHANGE_PLAYER = 'CHANGE_PLAYER',
	CHECK_FOR_VICTORY = 'CHECK_FOR_VICTORY',
	RESET_BOARD = 'RESET_BOARD',
}

/*
        === Action Interfaces ===
*/

interface MakeTurnAction {
	type: BoardActionTypes.MAKE_TURN;
	payload: number;
}
interface ChangePlayerAction {
	type: BoardActionTypes.CHANGE_PLAYER;
}
interface CheckForVictoryAction {
	type: BoardActionTypes.CHECK_FOR_VICTORY;
}
interface ResetBoardAction {
	type: BoardActionTypes.RESET_BOARD;
}

/*
        === Combined Action Interface ===
*/
export type BoardActions =
	| MakeTurnAction
	| ChangePlayerAction
	| CheckForVictoryAction
	| ResetBoardAction;
