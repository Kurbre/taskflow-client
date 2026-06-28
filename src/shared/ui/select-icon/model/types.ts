import { projectIconMap } from './icons'

export type ProjectIconName = keyof typeof projectIconMap

export type SelectIconProps = {
	onChange: (icon: string) => void
	value: string
	disabled?: boolean
}
