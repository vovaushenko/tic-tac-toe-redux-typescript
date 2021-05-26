import { FC } from 'react';
import styled from 'styled-components';
import { useTypedSelector } from '../hooks/useTypedSelector';
import ThemeToggler from './ThemeToggler';

const Navbar: FC = () => {
	const { winners } = useTypedSelector((state) => state.board);

	const playerOneVictories = winners.filter(
		(victor) => victor === 'Player-1'
	).length;
	const playerTwoVictories = winners.filter(
		(victor) => victor === 'Player-2'
	).length;

	return (
		<StyledNavbar>
			<nav>
				<ul>
					<li>
						<h4>Tic Tac Toe</h4>
					</li>
					<li>
						<div>
							<h4>Victories</h4>
							<h4>Player(X) : {playerOneVictories}</h4>
							<h4>Player(O) : {playerTwoVictories}</h4>
						</div>
					</li>

					<li>
						<ThemeToggler />
					</li>
				</ul>
			</nav>
		</StyledNavbar>
	);
};

const StyledNavbar = styled.header`
	height: 5rem;
	background-color: ${({ theme }) => theme.background};

	nav {
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		width: 90%;
		height: 100%;
		max-width: 1170px;
		margin: 0 auto;
	}

	ul {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;

export default Navbar;
