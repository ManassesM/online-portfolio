import { styled } from 'styled-components'

export const SubTitle = styled.span`
	color: ${({ theme }) => theme.colors.third3};
	font-size: ${({ theme }) => theme.typography.fontSizes.sm};
`

export const TileContainer = styled.div`
	width: 100%;
	height: 100px;
	padding: ${({ theme }) => theme.spacing.lg};

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: ${({ theme }) => theme.spacing.md};

	border-radius: ${({ theme }) => theme.borderRadius.sm};
	border-bottom: 2px solid ${({ theme }) => theme.colors.secondary1};

	&:hover {
		background: ${({ theme }) => theme.colors.secondary3};
		cursor: pointer;
	}

	img {
		width: 50px;
		height: 50px;
	}
`
