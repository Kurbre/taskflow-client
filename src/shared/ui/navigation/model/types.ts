import { ReactNode } from 'react'

export type Navigation = {
	label: string
	href: string
	icon?: ReactNode
	className?: string
}

export type NavigationProps = {
	navigations: Navigation[]
}
