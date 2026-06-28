import { User } from '@/entities/user'
import { ProjectIconName } from '@/shared/ui/select-icon'

export type Project = {
	id: string
	title: string
	description: string
	color: string
	icon: ProjectIconName
	users: User[]
	spaces: unknown[]
	createdAt: string
	updatedAt: string
}

export type ProjectItemProps = {
	project: Project
}
