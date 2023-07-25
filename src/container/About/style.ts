import { styled } from 'styled-components'

export const AboutContainer = styled.div`
	height: 100%;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: calc(${({ theme }) => theme.spacing.lg} * 2);

	p {
		font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
		font-size: calc(${({ theme }) => theme.typography.fontSizes.xlg});
		color: ${({ theme }) => theme.colors.primary1};
		line-height: 3.5rem;
	}

	h1 {
		width: 45rem;
		font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
		font-size: calc(${({ theme }) => theme.typography.fontSizes.xxlg});
		line-height: 2.5rem;
	}

	strong {
		color: ${({ theme }) => theme.colors.third1};
	}

	img {
		width: 672px;
		height: 527px;
	}
`
