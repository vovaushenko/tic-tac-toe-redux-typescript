/*
        === Main Interface ===
*/
export interface BoardState {
	board: string[];
	player: 'Player-1' | 'Player-2';
	winner: '' | 'Player-1' | 'Player-2';
	turn: number;
}

/*
        === Action Types ===
*/
export enum BoardActionTypes {
	MAKE_TURN = 'MAKE_TURN',
	CHANGE_PLAYER = 'CHANGE_PLAYER',
	CHECK_FOR_VICTORY = 'CHECK_FOR_VICTORY',
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

/*
        === Combined Action Interface ===
*/
export type BoardActions =
	| MakeTurnAction
	| ChangePlayerAction
	| CheckForVictoryAction;
