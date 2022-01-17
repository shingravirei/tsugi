import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { styled } from '../stitches.config';

const Navbar = styled('nav', {
	display: 'flex',
	justifyContent: 'space-around',
	width: '100vw',
});

const NavbarNav = styled('div', {
	display: 'flex',
	gap: '$1',
});

const NavBrand = styled('a', {
	textDecoration: 'none',
	color: '$fg',
	fontSize: '$xl',
	fontWeight: '500',
});

const StyledLink = styled('a', {
	textDecoration: 'none',
	color: '$indigo2',
	'&.active': {
		borderBottom: '2px solid $indigo2',
	},
});

const ThemeChangerWrapper = styled('div', {
	'&:hover': {
		cursor: 'pointer',
	},
});

const ThemeChanger = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<ThemeChangerWrapper
			onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
		>
			{theme === 'light' ? (
				<FontAwesomeIcon icon={faSun} />
			) : (
				<FontAwesomeIcon icon={faMoon} />
			)}
		</ThemeChangerWrapper>
	);
};

const N = () => {
	const router = useRouter();

	return (
		<Navbar>
			<NavbarNav>
				<Link href="/" passHref>
					<NavBrand>Next Starter</NavBrand>
				</Link>
			</NavbarNav>
			<NavbarNav>
				<Link href="/" passHref>
					<StyledLink className={router.pathname === '/' ? 'active' : ''}>
						Home
					</StyledLink>
				</Link>
				<Link href="/about" passHref>
					<StyledLink className={router.pathname === '/about' ? 'active' : ''}>
						About
					</StyledLink>
				</Link>
				<ThemeChanger />
			</NavbarNav>
		</Navbar>
	);
};

export default N;
