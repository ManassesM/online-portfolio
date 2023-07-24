import Logo from '@/assets/logo.svg'
import LinkStyle from '@/utiils/LinkStyle'
import routes from '@/utiils/routes'
import * as S from './style'

export default function Header() {
	return (
		<S.HeaderContainer>
			<S.NavbarContainer>
				<img src={Logo} alt='Logo' />
				{routes.map(({ to, link }) => (
					<S.StyledLink key={link} to={to} style={LinkStyle}>
						{link}
					</S.StyledLink>
				))}
			</S.NavbarContainer>
		</S.HeaderContainer>
	)
}
