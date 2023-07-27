import Gamifica from '@/assets/gamifica.png'
import Tile from '@/components/Tile'
import experience from '@/mock/experience_data.json'

interface ExperienceProps {
	handleModal: (id: string) => void
}

export default function Experience({ handleModal }: ExperienceProps) {
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
