import { FC } from 'react';
import Board from '../components/Board';

import CenteredContainer from '../components/CenteredContainer';

const Main: FC = () => {
	return (
		<CenteredContainer>
			<Board />
		</CenteredContainer>
	);
};

export default Main;
