import { Column } from '@/entities/column'

export type Workspace = {
	id: string
	title: string
	spaceId: string
	createdAt: string
	updatedAt: string
	columns: Column[]
}
