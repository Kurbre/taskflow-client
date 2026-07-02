import { Task } from '@/entities/task'

export type Column = {
	id: string
	title: string
	color: string
	workspaceId: string
	position: number
	createdAt: string
	updatedAt: string
	tasks: Task[]
}
