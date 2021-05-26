import { FC } from 'react';
import styled from 'styled-components';

interface CellInterface {
	id: number;
	content: string;
}

const Cell: FC<CellInterface> = ({ id, content }) => {
	return <StyledCell id={String(id)}>{content}</StyledCell>;
};

const StyledCell = styled.div`
	border: 2px solid ${({ theme }) => theme.mainColor};
	width: 100px;
	height: 100px;
`;

export default Cell;
