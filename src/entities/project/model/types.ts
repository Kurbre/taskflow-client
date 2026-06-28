import { User } from '@/entities/user'

export type Project = {
	id: string
	title: string
	users: User[]
	spaces: unknown[]
	createdAt: string
	updatedAt: string
}

export type ProjectItemProps = {
	project: Project
}
