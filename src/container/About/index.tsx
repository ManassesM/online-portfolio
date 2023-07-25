import ImgMana from '@/assets/mana.png'
import * as Style from './style'

export default function AboutPage() {
	return (
		<Style.AboutContainer>
			<div>
				<p>Manassés Moura,</p>
				<h1>
					Graduated in Analysis and Systems Development from Universidade
					Projeção. Currently doing a postgraduation in Cloud Computing. Today
					my focus is on <strong>Java</strong> programming and{' '}
					<strong>Clouding Computing</strong>
				</h1>
			</div>
			<img src={ImgMana} alt='hello' />
		</Style.AboutContainer>
	)
}
