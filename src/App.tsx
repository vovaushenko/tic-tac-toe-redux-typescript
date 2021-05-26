import React from 'react';
/*  Themes */
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { darkTheme, lightTheme } from './themes';
/* Router */
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useTypedSelector } from './hooks/useTypedSelector';
import Main from './pages/Main';

const App = () => {
	const { theme } = useTypedSelector((state) => state.theme);

	return (
		<ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
			<GlobalStyles />
			<BrowserRouter>
				<Navbar />
				<Route exact path="/">
					<Main />
				</Route>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
