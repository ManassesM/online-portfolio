interface ResumeModalProps {
	id: string
	onCloseModal: () => void
}

export default function ResumeModal({ id, onCloseModal }: ResumeModalProps) {
	return (
		<div>
			{id}
			<button onClick={onCloseModal}>Close!</button>
		</div>
	)
}
