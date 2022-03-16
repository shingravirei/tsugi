import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { styled } from '../../stitches.config';
import { useMounted } from '../hooks';

const NavbarWrapper = styled('nav', {
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
	color: '$fg',
	'&.active': {
		borderBottom: '2px solid $fg',
	},
});

const ThemeChangerWrapper = styled('div', {
	'&:hover': {
		cursor: 'pointer',
	},
});

const ThemeChanger = () => {
	const mounted = useMounted();
	const { theme, setTheme } = useTheme();

	const handleChange = () => setTheme(theme === 'light' ? 'dark' : 'light');

	if (!mounted) return null;

	const ThemeChangerIcon =
		theme === 'light' ? (
			<FontAwesomeIcon icon={faMoon} />
		) : (
			<FontAwesomeIcon icon={faSun} />
		);

	return (
		<ThemeChangerWrapper onClick={handleChange}>
			{ThemeChangerIcon}
		</ThemeChangerWrapper>
	);
};

const Navbar = () => {
	const router = useRouter();

	return (
		<NavbarWrapper>
			<NavbarNav>
				<Link href='/' passHref>
					<NavBrand>Next Starter</NavBrand>
				</Link>
			</NavbarNav>
			<NavbarNav>
				<Link href='/' passHref>
					<StyledLink
						className={router.pathname === '/' ? 'active' : ''}
					>
						Home
					</StyledLink>
				</Link>
				<Link href='/about' passHref>
					<StyledLink
						className={router.pathname === '/about' ? 'active' : ''}
					>
						About
					</StyledLink>
				</Link>
				<ThemeChanger />
			</NavbarNav>
		</NavbarWrapper>
	);
};

export default Navbar;
