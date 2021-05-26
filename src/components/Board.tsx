import { FC } from 'react-dom/node_modules/@types/react';
import styled from 'styled-components';
import Cell from './Cell';
import { initialState } from './initialBoardState';

const Board: FC = () => {
	const handleClick = (e: any) => {
		console.log(e.target.id);
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
