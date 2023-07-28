import * as MuiIcon from '@mui/icons-material'
import * as Style from './style'
import * as Util from './utils'

interface IconLinkProps {
	href?: string
	size?: number
	color?: keyof typeof Util.available_colors
	icon: keyof typeof Util.available_icons
}

export default function IconLink({
	href,
	size = 40,
	color = 'primary',
	icon,
}: IconLinkProps) {
	const SelectedIcon = MuiIcon[Util.available_icons[icon]]

	return (
		<Style.IconLink size={size} color={color} isLink={!!href}>
			{href ? (
				<a href={`https://${href}`} target='_blank'>
					<SelectedIcon />
				</a>
			) : (
				<SelectedIcon />
			)}
		</Style.IconLink>
	)
}
