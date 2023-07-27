import resume from '@/mock/resume_data.json'
import CloseIcon from '@mui/icons-material/Close'
import * as Style from './style'

interface ResumeModalProps {
	id: string
	onCloseModal: () => void
}

export default function ResumeModal({ id, onCloseModal }: ResumeModalProps) {
	const data = resume?.filter((xp) => xp.id === id)[0]
	const skills = data?.skills.split(';')

	return (
		<Style.ResumeModalContainer>
			<Style.ModalWrapper>
				<CloseIcon onClick={onCloseModal} />
				<Style.ModalAlias>{data?.type}</Style.ModalAlias>
				<Style.ContentWrapper>
					<img src={data?.imgSrcBanner} alt={data?.imgAlt} />
					<h1>{data?.role}</h1>
					<span>{data?.subtitle}</span>
					<Style.Skills>
						{skills?.map((sk, id) => (
							<span key={id}>{sk} &#x2022; </span>
						))}
					</Style.Skills>
				</Style.ContentWrapper>
			</Style.ModalWrapper>
		</Style.ResumeModalContainer>
	)
}
