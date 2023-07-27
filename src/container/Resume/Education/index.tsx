import Gamifica from '@/assets/gamifica.png'
import Tile from '@/components/Tile'
import resume from '@/mock/resume_data.json'

interface EducationProps {
	handleModal: (id: string) => void
}

export default function Education({ handleModal }: EducationProps) {
	const education = resume.filter((xp) => xp.type === 'education')

	return (
		<>
			{education?.map(({ id, imgSrc, imgAlt, title, subtitle }) => (
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
