import ResumeModal from '@/components/ResumeModal'
import { useState } from 'react'
import Certifications from './Certifications'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
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
					<Experience handleModal={handleModal} type='experience' />
				</Style.Column>
				<Style.Column>
					<p>Education</p>
					<Education handleModal={handleModal} type='education' />
				</Style.Column>
				<Style.Column>
					<p>Skills</p>
					<Skills handleModal={handleModal} type='skills' />
				</Style.Column>
				<Style.Column>
					<p>Licenses & certifications</p>
					<Certifications handleModal={handleModal} type='certifications' />
				</Style.Column>
				<Style.Column>
					<p>Projects</p>
				</Style.Column>
			</Style.ResumeContainer>
			{modal && <ResumeModal id={id} onCloseModal={handleClose} />}
		</>
	)
}
