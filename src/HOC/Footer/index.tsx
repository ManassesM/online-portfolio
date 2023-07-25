import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { useLocation } from 'react-router-dom'
import * as S from './style'

export default function Footer() {
	const { pathname } = useLocation()
	console.log(pathname)
	const isHome = pathname === '/'

	return (
		<S.FooterContainer>
			{isHome ? (
				<p>
					Copyright ©2023, Design by <span>Manassés</span>
				</p>
			) : (
				<S.FooterWrapper>
					<p>
						©2023 Manassés, Software Engineer based in Ireland, All Rights
						Reserved
					</p>
					<S.IconsWrapper>
						<a
							href='https://www.linkedin.com/in/manasses-moura/'
							target='_blank'
						>
							<LinkedInIcon />
						</a>
						<a href='https://github.com/ManassesM' target='_blank'>
							<GitHubIcon />
						</a>
					</S.IconsWrapper>
				</S.FooterWrapper>
			)}
		</S.FooterContainer>
	)
}
