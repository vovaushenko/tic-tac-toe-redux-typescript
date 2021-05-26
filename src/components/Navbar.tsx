import { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ThemeToggler from './ThemeToggler';

const StyledNavbar = styled.header`
	height: 5rem;
	background-color: ${({ theme }) => theme.background};

	nav {
		display: flex;
		align-items: center;
		width: 90%;
		height: 100%;
		max-width: 1170px;
		margin: 0 auto;
	}

	ul {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
`;

const Navbar: FC = () => {
	return (
		<StyledNavbar>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>

					<li>
						<ThemeToggler />
					</li>
				</ul>
			</nav>
		</StyledNavbar>
	);
};

export default Navbar;
