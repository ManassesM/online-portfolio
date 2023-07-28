import { styled } from 'styled-components'

export const LinkWrapper = styled.section`
	display: flex;
	align-items: center;

	gap: ${({ theme }) => theme.spacing.lg};
	margin-bottom: ${({ theme }) => theme.spacing.lg};
`

export const ContactContainer = styled.div`
	padding: calc(${({ theme }) => theme.spacing.lg} * 4);

	& > h1 {
		width: 400px;
		font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
		font-size: ${({ theme }) => theme.typography.fontSizes.xxlg};
		margin-bottom: calc(${({ theme }) => theme.spacing.lg} * 3);
	}
`
