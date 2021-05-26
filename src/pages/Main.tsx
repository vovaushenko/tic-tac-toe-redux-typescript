import { FC } from 'react';
import Board from '../components/Board';

import CenteredContainer from '../components/CenteredContainer';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Main: FC = () => {
	const { player, winner, turn } = useTypedSelector((state) => state.board);

	if (winner) {
		return (
			<CenteredContainer>
				<h1>{player} wins in this battle! Contratulations 😉</h1>
			</CenteredContainer>
		);
	}
	if (turn === 9 && !winner) {
		return (
			<CenteredContainer>
				<h1>🥺 Draw </h1>
			</CenteredContainer>
		);
	}

	return (
		<CenteredContainer>
			<h2>Current Turn: {player === 'Player-1' ? 'X' : 'O'}</h2>
			<Board />
		</CenteredContainer>
	);
};

export default Main;
