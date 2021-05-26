import { FC } from 'react-dom/node_modules/@types/react';
import styled from 'styled-components';
import Cell from './Cell';

const Board: FC = () => {
	return (
		<StyledBoard>
			<Cell />
			<Cell />
			<Cell />
			<Cell />
			<Cell />
			<Cell />
			<Cell />
			<Cell />
			<Cell />
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
