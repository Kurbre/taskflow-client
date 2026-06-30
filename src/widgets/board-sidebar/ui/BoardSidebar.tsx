'use client'
import { getProjectParamId, SelectProject } from '@/entities/project'
import { useProjectFindByIdQuery } from '@/entities/project/model/use-project-find-by-id-query'
import { useProjectsMeQuery } from '@/entities/project/model/use-projects-me-query'
import { SpacesTree } from '@/entities/space'
import { usePathname } from 'next/navigation'

export default function BoardSidebar() {
	const pathname = usePathname()
	const id = getProjectParamId(pathname)
	const { data } = useProjectFindByIdQuery(id)

	console.log(data)

	return (
		<aside className='w-[350px] py-4 px-3 border-r border-r-border bg-background'>
			<SelectProject />
			<SpacesTree spaces={data?.spaces ?? []} />
		</aside>
	)
}
