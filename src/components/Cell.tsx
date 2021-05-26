import { FC } from 'react';
import styled from 'styled-components';
import { useTypedSelector } from '../hooks/useTypedSelector';

interface CellInterface {
	id: number;
	content: string;
}

const Cell: FC<CellInterface> = ({ id }) => {
	const { board } = useTypedSelector((state) => state.board);

	return (
		<StyledCell id={String(id)}>
			<p>{board[id - 1]}</p>
		</StyledCell>
	);
};

const StyledCell = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.background};
	height: 182px;
	width: 182px;

	p {
		font-size: 4rem;
	}
`;

export default Cell;
