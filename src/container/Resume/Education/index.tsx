import Tile from '@/components/Tile'
import resume from '@/mock/resume_data.json'

interface EducationProps {
	handleModal: (id: string) => void
	type: string
}

export default function Education({ handleModal, type }: EducationProps) {
	const education = resume.filter((xp) => xp.type === type)

	return (
		<>
			{education?.map(({ id, imgSrc, imgAlt, title, subtitle }) => (
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
