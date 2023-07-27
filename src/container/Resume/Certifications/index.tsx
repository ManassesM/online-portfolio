import Gamifica from '@/assets/gamifica.png'
import Tile from '@/components/Tile'
import resume from '@/mock/resume_data.json'

interface CertificationsProps {
	handleModal: (id: string) => void
	type: string
}

export default function Certifications({
	handleModal,
	type,
}: CertificationsProps) {
	const experience = resume.filter((xp) => xp.type === type)

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
