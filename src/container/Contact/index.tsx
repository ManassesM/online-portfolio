import IconLink from '@/components/IconLink'
import * as Style from './style'

export default function ContactPage() {
	return (
		<Style.ContactContainer>
			<h1>You can reach out on me via email, linkedin and even instagram!</h1>
			<div>
				<Style.LinkWrapper>
					<IconLink
						href='linkedin.com/in/manasses-moura/?locale=en_US'
						icon='linkedin'
					/>
					<p>manasses-moura</p>
				</Style.LinkWrapper>
				<Style.LinkWrapper>
					<IconLink icon='email' />
					<p>mouramana6@gmail.com</p>
				</Style.LinkWrapper>
				<Style.LinkWrapper>
					<IconLink icon='email' />
					<p>manaadsmoura@outlook.com</p>
				</Style.LinkWrapper>
				<Style.LinkWrapper>
					<IconLink href='instagram.com/mana6m_/' icon='instagram' />
					<p>mana6m_</p>
				</Style.LinkWrapper>
			</div>
		</Style.ContactContainer>
	)
}
