type NavigationLink = {
	label: string
	href: string
	items?: {
		href: string
		label: string
	}[]
}

export const navigationLinks: NavigationLink[] = [
	{
		label: 'Возможности',
		href: '/'
	},
	{
		label: 'О компании',
		href: '/about'
	}
]
