import IconLink from '@/components/IconLink'
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
						<IconLink
							href='linkedin.com/in/manasses-moura/'
							size={40}
							color='secondary'
							icon='linkedin'
						/>
						<IconLink
							href='github.com/ManassesM/'
							size={40}
							color='secondary'
							icon='github'
						/>
					</Style.IconsWrapper>
				</Style.FooterWrapper>
			)}
		</Style.FooterContainer>
	)
}
