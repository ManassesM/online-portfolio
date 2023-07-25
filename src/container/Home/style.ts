import { styled } from 'styled-components'

export const IconsWrapper = styled.div`
	display: flex;
	gap: calc(${({ theme }) => theme.spacing.md} * 3);

	svg {
		width: 60px;
		height: 60px;

		cursor: pointer;
		color: ${({ theme }) => theme.colors.primary3};

		&:hover {
			color: ${({ theme }) => theme.colors.primary1};
		}
	}
`

export const ContentWrapper = styled.div`
	max-width: 34.75rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;

	gap: calc(${({ theme }) => theme.spacing.md} * 3);

	h1 {
		font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
		font-size: calc(${({ theme }) => theme.typography.fontSizes.xlg}*2);
	}

	h2 {
		font-size: ${({ theme }) => theme.typography.fontSizes.xxlg};
	}
`

export const HomeContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	height: calc(100vh - 214px);
`
