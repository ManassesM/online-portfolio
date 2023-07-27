import * as Style from './style'

interface TileProps {
	id: string
	title: string
	subtitle: string
	imgSrc: string
	imgAlt?: string
	handleModal: (id: string) => void
}

export default function Tile({
	id,
	title,
	subtitle,
	imgSrc,
	imgAlt = '',
	handleModal,
}: TileProps) {
	return (
		<Style.TileContainer onClick={() => handleModal(id)}>
			<img src={imgSrc} alt={imgAlt} />
			<p>{title}</p>
			<Style.SubTitle>{subtitle}</Style.SubTitle>
		</Style.TileContainer>
	)
}
