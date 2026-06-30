export type Space = {
	id: string
	title: string
	projectId: string
	createdAt: string
	updatedAt: string
	workspaces: any[]
}

export type SpacesTreeProps = {
	spaces: Space[]
}
