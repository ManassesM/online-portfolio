import { styled } from 'styled-components'

export const Skills = styled.p`
	color: ${({ theme }) => theme.colors.third3};

	width: 60%;
	text-align: center;
	word-break: break-all;
`

export const ContentWrapper = styled.div`
	height: 100%;

	display: flex;
	flex-direction: column;
	gap: calc(${({ theme }) => theme.spacing.md} * 2);
	align-items: center;
	justify-content: center;

	& > img {
		width: auto;
		height: 150px;
		margin-bottom: calc(${({ theme }) => theme.spacing.md} * 3);
	}

	& > h1 {
		font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
		font-size: ${({ theme }) => theme.typography.fontSizes.lg};
	}
`

export const ModalAlias = styled.h1`
	padding: ${({ theme }) => theme.spacing.lg};

	text-align: center;
	text-transform: capitalize;

	font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
	font-size: ${({ theme }) => theme.typography.fontSizes.xlg};
`

export const ModalWrapper = styled.div`
	height: 100%;
	position: relative;

	svg {
		position: absolute;

		top: 10px;
		right: 10px;

		color: ${({ theme }) => theme.colors.primary1};
		width: 30px;
		height: 30px;

		transition: all 0.1s ease;
		&:hover {
			cursor: pointer;
			transform: scale(1.1);
		}
	}
`

export const ResumeModalContainer = styled.div`
	position: absolute;
	z-index: 1;

	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	border: 1px solid ${({ theme }) => theme.colors.secondary3};
	border-radius: ${({ theme }) => theme.borderRadius.sm};

	width: 45%;
	height: 500px;

	background: ${({ theme }) => theme.colors.secondary2};
`
