import Logo from '@/assets/logo.svg'
import LinkStyle from '@/utiils/LinkStyle'
import routes from '@/utiils/routes'
import * as Style from './style'

export default function Header() {
	return (
		<Style.HeaderContainer>
			<Style.NavbarContainer>
				<img src={Logo} alt='Logo' />
				{routes.map(({ to, link }) => (
					<Style.StyledLink key={link} to={to} style={LinkStyle}>
						{link}
					</Style.StyledLink>
				))}
			</Style.NavbarContainer>
		</Style.HeaderContainer>
	)
}
