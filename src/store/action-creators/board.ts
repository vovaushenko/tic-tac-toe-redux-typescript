import { BoardActionTypes } from '../../types/boardTypes';

export const makeTurn = () => ({
	type: BoardActionTypes.MAKE_TURN,
});

export const changePlayer = () => ({
	type: BoardActionTypes.CHANGE_PLAYER,
});
export const checkForVictory = () => ({
	type: BoardActionTypes.CHECK_FOR_VICTORY,
});
