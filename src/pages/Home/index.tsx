import * as S from '@/container/Home/style'

export default function Home() {
	return (
		<S.HomeContainer>
			<S.ContentWrapper>
				<h1>Welcome to my online portfolio</h1>
				<h2>
					Browse through a collection of my projects, resume, education, and
					certificates.
				</h2>
				<S.IconsWrapper>
					<a href='https://www.linkedin.com/in/manasses-moura/' target='_blank'>
						<S.StyledLinkedinIcon />
					</a>
					<a href='https://github.com/ManassesM' target='_blank'>
						<S.StyledGithubIcon />
					</a>
				</S.IconsWrapper>
			</S.ContentWrapper>
		</S.HomeContainer>
	)
}
