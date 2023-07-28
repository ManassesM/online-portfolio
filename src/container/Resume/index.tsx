import ResumeModal from '@/components/ResumeModal'
import { useState } from 'react'
import ResumeColumn from './ResumeColumn'
import * as Style from './style'

export default function ResumePage() {
	const [modal, setModal] = useState(false)
	const [id, setId] = useState(null)

	function handleModal(id: string) {
		setModal(true)
		setId(id)
	}

	function handleClose() {
		setModal(false)
	}

	return (
		<>
			<Style.ResumeContainer>
				<Style.Column>
					<p>Experience</p>
					<ResumeColumn handleModal={handleModal} type='experience' />
				</Style.Column>
				<Style.Column>
					<p>Education</p>
					<ResumeColumn handleModal={handleModal} type='education' />
				</Style.Column>
				<Style.Column>
					<p>Skills</p>
					<ResumeColumn handleModal={handleModal} type='skills' />
				</Style.Column>
				<Style.Column>
					<p>Licenses & certifications</p>
					<ResumeColumn handleModal={handleModal} type='certifications' />
				</Style.Column>
				<Style.Column>
					<p>Languages</p>
					<ResumeColumn handleModal={handleModal} type='languages' />
				</Style.Column>
			</Style.ResumeContainer>
			{modal && <ResumeModal id={id} onCloseModal={handleClose} />}
		</>
	)
}
