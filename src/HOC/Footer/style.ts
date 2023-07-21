import { styled } from 'styled-components'

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
