import { findProjectByIdRequestServer } from '@/entities/project/api/find-project-by-id-server.api'
import { Navigation, navigations } from '@/shared/ui/navigation'
import { projectIconMap } from '@/shared/ui/select-icon'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export async function generateMetadata({
	params
}: {
	params: Promise<{ id: string }>
}): Promise<Metadata> {
	const { id } = await params
	const res = await findProjectByIdRequestServer(id)

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

	const project = await findProjectByIdRequestServer(id)

	if (!project) {
		await redirect('/board')
	}

	const Icon = projectIconMap[project.icon]

	return (
		<div>
			<Navigation
				navigations={[
					navigations.projects,
					{
						href: `/board/${id}`,
						label: project.title,
						icon: <Icon size={21} color={project.color} />,
						className: 'text-main text-base font-semibold'
					}
				]}
			/>
		</div>
	)
}
