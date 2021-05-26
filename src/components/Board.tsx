import React from 'react';
import { FC } from 'react-dom/node_modules/@types/react';
import styled from 'styled-components';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Cell from './Cell';
import { initialState } from '../dev-data/initialBoardState';

const Board: FC = () => {
	const { changePlayer, checkForVictory, makeTurn } = useActions();
	const { board } = useTypedSelector((state) => state.board);

	const handleClick = (e: any) => {
		const cellID = Number(e.target.id);

		if (board[cellID - 1] === '') {
			makeTurn(Number(e.target.id));
			checkForVictory();
			changePlayer();
		}
	};

	return (
		<StyledBoard onClick={handleClick}>
			{initialState.map((el) => (
				<Cell key={el.id} {...el} />
			))}
		</StyledBoard>
	);
};

const StyledBoard = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2px;
	width: 550px;
	height: 550px;
	background-color: ${({ theme }) => theme.mainColor};
	box-shadow: 0 0 10px rgb(0 0 0 / 15%), 0 3px 3px rgb(0 0 0 / 15%);

	@media ${({ theme }) => theme.media.phone} {
		width: 200px;
		height: 200px;
	}
`;

export default Board;
