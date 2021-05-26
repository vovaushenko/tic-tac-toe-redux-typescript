import { FC } from 'react-dom/node_modules/@types/react';
import styled from 'styled-components';

const CenteredContainer: FC = ({ children }) => {
	return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	min-width: 100vw;
	min-height: calc(100vh - 5rem);
	margin: 0 auto;
	text-align: center;
`;

export default CenteredContainer;
