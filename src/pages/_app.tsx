import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { darkTheme, globalStyles } from '../../stitches.config';
import Layout from './Layout';

const App = ({ Component, pageProps }: AppProps) => {
	globalStyles();

	return (
		<ThemeProvider
			attribute='class'
			defaultTheme={darkTheme.className}
			enableSystem={false}
			value={{ light: 'light', dark: darkTheme.className }}
			themes={['light', darkTheme.className]}
			enableColorScheme={false}
		>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
};

export default App;
