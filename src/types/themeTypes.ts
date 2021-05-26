import 'styled-components';

interface media {
	phone: string;
	tablet: string;
}

declare module 'styled-components' {
	export interface DefaultTheme {
		mode: string;
		body: string;
		text: string;
		background: string;
		mainColor: string;
		linkColor: string;
		toggleColor: string;
		media: media;
	}
}
