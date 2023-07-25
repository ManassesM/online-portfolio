import * as Icon from '@mui/icons-material'
import { useLocation } from 'react-router-dom'
import * as Style from './style'

export default function Footer() {
	const { pathname } = useLocation()
	const isHome = pathname === '/'

	return (
		<Style.FooterContainer>
			{isHome ? (
				<p>
					Copyright ©2023, Design by <span>Manassés</span>
				</p>
			) : (
				<Style.FooterWrapper>
					<p>
						©2023 Manassés, Software Engineer based in Ireland, All Rights
						Reserved
					</p>
					<Style.IconsWrapper>
						<a
							href='https://www.linkedin.com/in/manasses-moura/'
							target='_blank'
						>
							<Icon.LinkedIn />
						</a>
						<a href='https://github.com/ManassesM' target='_blank'>
							<Icon.GitHub />
						</a>
					</Style.IconsWrapper>
				</Style.FooterWrapper>
			)}
		</Style.FooterContainer>
	)
}
