import { FC } from 'react-dom/node_modules/@types/react';
import styled from 'styled-components';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Cell from './Cell';
import { initialState } from './initialBoardState';

const Board: FC = () => {
	const { changePlayer, checkForVictory, makeTurn } = useActions();
	const { board } = useTypedSelector((state) => state.board);
	const handleClick = (e: any) => {
		const cellID = Number(e.target.id);

		if (board[cellID - 1] === '') {
			makeTurn(Number(e.target.id));
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
	height: 300px;
	width: 300px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
`;

export default Board;
