import Mana from '@/assets/mana.png'
import * as S from '@/container/About/style'
import { PageContainer } from '@/styled-components/PageContainer'
export default function About() {
	return (
		<PageContainer>
			<S.AboutContainer>
				<div>
					<p>Manassés Moura,</p>
					<h1>
						Graduated in Analysis and Systems Development from Universidade
						Projeção. Currently doing a postgraduation in Cloud Computing. Today
						my focus is on <strong>Java</strong> programming and{' '}
						<strong>Clouding Computing</strong>
					</h1>
				</div>
				<img src={Mana} alt='hello' />
			</S.AboutContainer>
		</PageContainer>
	)
}
