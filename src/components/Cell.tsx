import { FC } from 'react';
import styled from 'styled-components';

const Cell: FC = () => {
	return <StyledCell></StyledCell>;
};

const StyledCell = styled.div`
	border: 2px solid ${({ theme }) => theme.mainColor};
	width: 100px;
	height: 100px;
`;

export default Cell;
