import { findProjectByIdRequestServer } from '@/entities/project/api/find-project-by-id-server.api'
import { findWorkspaceByIdServerRequest } from '@/entities/workspace/api/find-workspace-by-id.server.api'
import { Navigation, navigations } from '@/shared/ui/navigation'
import { projectIconMap } from '@/shared/ui/select-icon'
import { Board } from '@/widgets/board'
import { redirect } from 'next/navigation'

export default async function BoardWorkspace({
	params
}: {
	params: Promise<{ id: string; workspaceId: string }>
}) {
	const { id, workspaceId } = await params

	const project = await findProjectByIdRequestServer(id)

	const workspace = await findWorkspaceByIdServerRequest(workspaceId)

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
					},
					{
						href: `board/${id}/${workspaceId}`,
						label: workspace.title,
						className: 'text-main text-base'
					}
				]}
			/>
			<Board />
		</div>
	)
}
