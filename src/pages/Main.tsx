import { FC } from 'react';

import Board from '../components/Board';
import PlayAgainButton from '../components/PlayAgainButton';
import CenteredContainer from '../components/CenteredContainer';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Main: FC = () => {
	const { player, winner, turn } = useTypedSelector((state) => state.board);

	if (winner) {
		return (
			<CenteredContainer>
				<h1>{winner} wins in this battle! Contratulations 😉</h1>
				<PlayAgainButton>Play Again</PlayAgainButton>
			</CenteredContainer>
		);
	}

	if (turn === 9 && !winner) {
		return (
			<CenteredContainer>
				<h1>🥺 Draw </h1>
				<PlayAgainButton>Play Again</PlayAgainButton>
			</CenteredContainer>
		);
	}

	return (
		<CenteredContainer>
			<h2>
				Current Turn: {player === 'Player-1' ? 'X (Player 1)' : 'O (Player 2)'}
			</h2>

			<Board />
		</CenteredContainer>
	);
};

export default Main;
