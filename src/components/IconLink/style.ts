import { styled } from 'styled-components'
import { IconLinkProps } from './utils'

export const IconLink = styled.div<IconLinkProps>`
	svg {
		width: ${({ size }) => `${size}px`};
		height: ${({ size }) => `${size}px`};

		cursor: pointer;
		color: ${({ color, theme }) => theme.colors[color + '1']};

		&:hover {
			color: ${({ color, theme }) => theme.colors[color + '3']};
		}
	}
`
