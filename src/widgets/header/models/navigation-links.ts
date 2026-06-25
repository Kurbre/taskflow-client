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
		href: '/',
		items: [
			{
				href: '/',
				label: '123'
			}
		]
	},
	{
		label: 'О компании',
		href: '/about'
	}
]
