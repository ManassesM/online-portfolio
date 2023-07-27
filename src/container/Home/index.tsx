import IconLink from '@/components/IconLink'
import * as Style from './style'

export default function HomePage() {
	return (
		<Style.HomeContainer>
			<Style.ContentWrapper>
				<h1>Welcome to my online portfolio</h1>
				<h2>
					Browse through a collection of my projects, resume, education, and
					certificates.
				</h2>
				<Style.IconsWrapper>
					<IconLink
						icon='linkedin'
						href='linkedin.com/in/manasses-moura/'
						size={60}
						color='primary'
					/>
					<IconLink
						icon='github'
						href='github.com/ManassesM'
						size={60}
						color='primary'
					/>
				</Style.IconsWrapper>
			</Style.ContentWrapper>
		</Style.HomeContainer>
	)
}
