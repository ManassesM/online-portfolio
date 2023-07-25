import * as Icon from '@mui/icons-material'
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
					<a href='https://www.linkedin.com/in/manasses-moura/' target='_blank'>
						<Icon.LinkedIn />
					</a>
					<a href='https://github.com/ManassesM' target='_blank'>
						<Icon.GitHub />
					</a>
				</Style.IconsWrapper>
			</Style.ContentWrapper>
		</Style.HomeContainer>
	)
}
