import { theme } from '../styles'

export default function LinkStyle({ isActive }: any) {
	return {
		color: isActive && theme.colors.third1,
		cursor: isActive && 'default',
	}
}
