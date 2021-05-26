import { BoardActionTypes } from '../../types/boardTypes';

export const makeTurn = (id: number) => ({
	type: BoardActionTypes.MAKE_TURN,
	payload: id,
});

export const changePlayer = () => ({
	type: BoardActionTypes.CHANGE_PLAYER,
});
export const checkForVictory = () => ({
	type: BoardActionTypes.CHECK_FOR_VICTORY,
});
