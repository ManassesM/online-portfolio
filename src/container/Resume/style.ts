import { styled } from 'styled-components'

export const Column = styled.section`
	width: 100%;
	height: 90%;

	border-top-left-radius: ${({ theme }) => theme.borderRadius.sm};
	border-top-right-radius: ${({ theme }) => theme.borderRadius.sm};
	overflow: hidden;

	background: ${({ theme }) => theme.colors.secondary2};

	padding: 20px 0;
	display: flex;
	flex-direction: column;
	align-items: center;

	& > p {
		font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
		font-size: ${({ theme }) => theme.typography.fontSizes.xlg};
		text-align: center;
		margin-bottom: calc(${({ theme }) => theme.spacing.md} * 2);
	}

	overflow-y: auto;
	&::-webkit-scrollbar {
		width: 1px;
	}

	&::-webkit-scrollbar-track {
		background: ${({ theme }) => theme.colors.secondary2};
	}

	&:hover::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.colors.secondary3};
	}
`

export const ResumeContainer = styled.div`
	width: 100%;
	height: 100%;

	display: grid;
	grid-template-columns: repeat(5, 210px);
	gap: 28px;

	justify-content: space-evenly;
	align-content: stretch;

	justify-items: center;
	align-items: end;

	position: absolute;
	z-index: 0;
`
