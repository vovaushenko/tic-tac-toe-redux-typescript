import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
	mode: 'light',
	body: '#D5D8EE',
	text: '#0A0E1E',
	background: '#FFFFFF',
	mainColor: '#3C6FFF',
	linkColor: '#010606',
	toggleColor: '#3C6FFF',

	media: {
		phone: '(max-width: 500px)',
		tablet: '(max-width: 768px)',
	},
};

export const darkTheme: DefaultTheme = {
	mode: 'dark',
	body: '#19162F',
	text: 'rgba(255,255,255,0.9)',
	background: '#201D39',
	mainColor: '#FF755C',
	linkColor: '#B6B2DB',
	toggleColor: '#FF755C',

	media: {
		phone: '(max-width: 500px)',
		tablet: '(max-width: 768px)',
	},
};
