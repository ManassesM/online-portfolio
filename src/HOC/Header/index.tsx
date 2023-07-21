import Logo from '@/assets/logo.svg'
import * as S from './style'

export default function Header() {
	return (
		<S.HeaderContainer>
			<S.NavbarContainer>
				<img src={Logo} alt='Logo' />
				<S.LinkActive>HOME</S.LinkActive>
				<S.Link>ABOUT ME</S.Link>
				<S.Link>RESUME</S.Link>
				<S.Link>CONTACT</S.Link>
			</S.NavbarContainer>
		</S.HeaderContainer>
	)
}
