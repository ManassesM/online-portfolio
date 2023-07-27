import Gamifica from '@/assets/gamifica.png'
import Tile from '@/components/Tile'
import resume from '@/mock/resume_data.json'

interface ExperienceProps {
	handleModal: (id: string) => void
}

export default function Experience({ handleModal }: ExperienceProps) {
	const experience = resume.filter((xp) => xp.type === 'experience')

	return (
		<>
			{experience?.map(({ id, imgSrc, imgAlt, title, subtitle }) => (
				<Tile
					key={id}
					id={id}
					imgSrc={imgSrc || Gamifica}
					imgAlt={imgAlt}
					title={title}
					subtitle={subtitle}
					handleModal={handleModal}
				/>
			))}
		</>
	)
}
