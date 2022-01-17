import { createStitches } from '@stitches/react';

export const { styled, globalCss, createTheme, getCssText } = createStitches({
	theme: {
		colors: {
			white: '#fafafa',
			black: '#18181b',
			fg: '#18181b',
			bg: '#fafafa',
			blue1: '#60a5fa',
			blue2: '#2563eb',
			indigo1: '#818cf8',
			indigo2: '#4f46e5',
		},
		fonts: {
			sans: '"Fira Sans", sans-serif',
			serif: 'Helvetica, serif',
			mono: 'Monospace',
		},
		fontSizes: {
			sm: '.75rem',
			md: '1rem',
			lg: '1.25rem',
			xl: '1.5rem',
		},
		sizes: {
			fooSize: '1rem',
		},
		space: {
			1: '1rem',
		},
	},
});

export const darkTheme = createTheme('dark', {
	colors: {
		fg: '#fafafa',
		bg: '#18181b',
		blue1: '#2563eb',
		blue2: '#60a5fa',
		indigo1: '#4f46e5',
		indigo2: '#818cf8',
	},
});

export const globalStyles = globalCss({
	html: {
		boxSizing: 'border-box',
		height: '100%',
	},
	'*, *:before, *:after': {
		boxSizing: 'inherit',
	},
	'*': {
		margin: '0',
		padding: '0',
		textRendering: 'optimizeLegibility',
	},
	body: {
		height: '100%',
		fontFamily: '$sans',
		lineHeight: '1.5',
	},
	'#__next': {
		height: '100%',
	},
});
