import ResumeModal from '@/components/ResumeModal'
import { useState } from 'react'
import Experience from './Experience'
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
					<Experience handleModal={handleModal} />
				</Style.Column>
				<Style.Column>
					<p>Education</p>
				</Style.Column>
				<Style.Column>
					<p>Skills</p>
				</Style.Column>
				<Style.Column>
					<p>Licenses & certifications</p>
				</Style.Column>
				<Style.Column>
					<p>Projects</p>
				</Style.Column>
			</Style.ResumeContainer>
			{modal && <ResumeModal id={id} onCloseModal={handleClose} />}
		</>
	)
}
