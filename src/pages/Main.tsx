import { FC } from 'react';
import styled from 'styled-components';

const StyledMainPage = styled.main`
	display: grid;
	place-content: center;

	text-align: center;
	width: 100vw;
	height: calc(100vh - 5rem);
`;

const Main: FC = () => {
	return (
		<StyledMainPage>
			<article>
				<h1>Custom React/Typescript Template</h1>
				<h2>Enhanced with Redux, Styled-Components and React-router</h2>
			</article>

			<article>
				<h2>List of Included && Pre-Configured dependencies</h2>
				<ul>
					<li>Redux</li>
					<li>Redux devtools extension</li>
					<li>Redux thunk</li>
					<li>Styled Components</li>
					<li>react-dom</li>
					<li>react-icons</li>
				</ul>
			</article>
		</StyledMainPage>
	);
};

export default Main;
