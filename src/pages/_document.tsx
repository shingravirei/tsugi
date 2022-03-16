import Document, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '../../stitches.config';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<style
						id='stitches'
						dangerouslySetInnerHTML={{ __html: getCssText() }}
					/>
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link
						href='https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,500;0,700;1,400&family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;1,400&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
