export type Task = {
	id: string
	title: string
	description: string
	columnId: string
	parentId: string | null
	userId: string
	position: number
	createdAt: string
	subtasks: Task[]
	updatedAt: string
}
