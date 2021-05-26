import { FC } from 'react';
import styled from 'styled-components';
import { useActions } from '../hooks/useAction';

const Button: FC = ({ children }) => {
	const { resetBoard } = useActions();
	const playAgain = () => resetBoard();
	return <StyledButton onClick={playAgain}>{children}</StyledButton>;
};

const StyledButton = styled.button`
	color: ${({ theme }) => theme.mainColor};
	background: transparent;
	font-family: inherit;
	border: 2px solid ${({ theme }) => theme.mainColor};
	font-size: 1rem;
	font-weight: 700;
	border-radius: 2rem;
	height: 3rem;
	padding: 0 2rem;
	cursor: pointer;
	box-sizing: border-box;
	margin-top: 1rem;
	outline: none;
	transition: all 0.3s linear;

	&:hover {
		color: ${({ theme }) => theme.text};
		background-color: ${({ theme }) => theme.mainColor};
	}
`;

export default Button;
