import { findProjectByIdRequest } from '@/entities/project'
import { Metadata } from 'next'

export async function generateMetadata({
	params
}: {
	params: Promise<{ id: string }>
}): Promise<Metadata> {
	const { id } = await params
	const res = await findProjectByIdRequest(id, true)

	return {
		title: `Taskflow - ${res.title}`,
		description: res.description
	}
}

export default async function SingleBoardPage({
	params
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = await params

	return <div></div>
}
