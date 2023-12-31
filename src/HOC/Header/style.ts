import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

export const StyledLink = styled(NavLink)`
	cursor: pointer;
	color: ${({ theme }) => theme.colors.secondary1};

	text-decoration: none;
	&:hover {
		color: ${({ theme }) => theme.colors.secondary3};
	}
`

export const NavbarContainer = styled.nav`
	height: 75px;
	width: 100%;

	display: flex;
	align-items: center;
	gap: calc(${({ theme }) => theme.spacing.md} * 8);

	border-top-left-radius: ${({ theme }) => theme.borderRadius.md};
	border-top-right-radius: ${({ theme }) => theme.borderRadius.sm};
	border-bottom-left-radius: ${({ theme }) => theme.borderRadius.md};
	border-bottom-right-radius: ${({ theme }) => theme.borderRadius.sm};

	background: ${({ theme }) => theme.colors.primary1};
	color: ${({ theme }) => theme.colors.secondary1};

	img {
		height: 75px;
		width: 75px;
	}
`

export const HeaderContainer = styled.header`
	height: 100px;

	display: flex;
	align-items: center;

	background-color: ${({ theme }) => theme.colors.primary3};
	padding: ${({ theme }) =>
		`${theme.spacing.lg} calc(${theme.spacing.lg} * 2)`};
`
