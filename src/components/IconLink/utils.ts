export const available_colors = {
	primary: 'primary',
	secondary: 'secondary',
	third: 'third',
}

export interface IconLinkProps {
	size: number
	color: keyof typeof available_colors
}

export const available_icons = {
	linkedin: 'LinkedIn',
	github: 'GitHub',
  close: 'Close'
}
