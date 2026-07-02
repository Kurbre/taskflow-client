'use client'
import { getProjectParamId, SelectProject } from '@/entities/project'
import { useProjectFindByIdQuery } from '@/entities/project/model/use-project-find-by-id-query'
import { SpacesTree } from '@/entities/space'
import { cn } from '@/shared/lib/utils'
import { BoardParams } from '@/shared/model/board-params.type'
import { Button } from '@/shared/ui/button'
import { Rocket } from 'lucide-react'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

export default function BoardSidebar() {
	const { id } = useParams<BoardParams>()
	const pathname = usePathname()

	const { data } = useProjectFindByIdQuery(id)

	return (
		<aside className='w-[350px] py-4 px-3 border-r border-r-border bg-background'>
			<SelectProject />
			{id && (
				<>
					<nav className='mt-5'>
						<Link href={`/board/${id}/space/new`}>
							<Button
								variant='ghost'
								className={cn(
									'w-full justify-start',
									pathname.includes(`/board/${id}/space/new`) &&
										'text-primary hover:text-primary'
								)}
							>
								<Rocket />
								Простарнства
							</Button>
						</Link>
					</nav>
					<SpacesTree spaces={data?.spaces ?? []} />
				</>
			)}
		</aside>
	)
}
