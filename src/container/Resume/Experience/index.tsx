import Tile from '@/components/Tile'
import resume from '@/mock/resume_data.json'

interface ExperienceProps {
	handleModal: (id: string) => void
	type: string
}

export default function Experience({ handleModal, type }: ExperienceProps) {
	const experience = resume.filter((xp) => xp.type === type)

	return (
		<>
			{experience?.map(({ id, imgSrc, imgAlt, title, subtitle }) => (
				<Tile
					key={id}
					id={id}
					imgSrc={imgSrc}
					imgAlt={imgAlt}
					title={title}
					subtitle={subtitle}
					handleModal={handleModal}
				/>
			))}
		</>
	)
}
