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
	border: 2px solid ${({ theme }) => theme.mainColor};
	width: 100px;
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: center;

	p {
		font-size: 2rem;
	}
`;

export default Cell;
