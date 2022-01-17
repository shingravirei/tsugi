import { ReactNode } from 'react';
import Navbar from '../Components/Navbar';
import { styled } from '../stitches.config';

const Container = styled('div', {
	color: '$fg',
	background: '$bg',
	minHeight: '100%',
	fontSize: '$lg',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	padding: '$1',
});

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<>
			<Container>
				<Navbar />
				<main>{children}</main>
			</Container>
		</>
	);
};

export default Layout;
