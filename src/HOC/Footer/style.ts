import { styled } from 'styled-components'

export const IconsWrapper = styled.div`
	display: flex;
	gap: calc(${({ theme }) => theme.spacing.lg} * 2);

	svg {
		width: 40px;
		height: 40px;

		cursor: pointer;
		color: ${({ theme }) => theme.colors.secondary1};

		&:hover {
			color: ${({ theme }) => theme.colors.secondary3};
		}
	}
`

export const FooterWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100%;
	margin: calc(${({ theme }) => theme.spacing.lg} * 2);
`

export const FooterContainer = styled.footer`
	background: ${({ theme }) => theme.colors.primary3};

	position: absolute;
	bottom: 0;

	width: 100%;
	height: 88px;

	display: flex;
	align-items: center;
	justify-content: center;

	p,
	span {
		font-weight: ${({ theme }) => theme.typography.fontWeights.thin};
	}

	p {
		color: ${({ theme }) => theme.colors.secondary1};
	}

	span {
		color: ${({ theme }) => theme.colors.third1};
	}
`
