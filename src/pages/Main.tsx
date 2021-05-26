import { FC } from 'react';
import Board from '../components/Board';

import CenteredContainer from '../components/CenteredContainer';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Main: FC = () => {
	const { player } = useTypedSelector((state) => state.board);
	return (
		<CenteredContainer>
			<h1>{player}</h1>
			<Board />
		</CenteredContainer>
	);
};

export default Main;
