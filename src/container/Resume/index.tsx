import Gamifica from '@/assets/gamifica.png'
import ResumeModal from '@/components/ResumeModal'
import Tile from '@/components/Tile'
import experience from '@/mock/experience_data.json'
import { useState } from 'react'
import * as Style from './style'
import Experience from './Experience'

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

	return !modal ? (
		<Style.ResumeContainer>
			<Style.Column>
				<p>Experience</p>
				<Experience handleModal={handleModal}/>
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
	) : (
		<ResumeModal id={id} onCloseModal={handleClose} />
	)
}
