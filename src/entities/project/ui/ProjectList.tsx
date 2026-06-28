'use client'
import { Skeleton } from '@/shared/ui/skeleton'
import { useProjectsMeQuery } from '../model/use-projects-me-query'
import ProjectItem from './ProjectItem'
import Link from 'next/link'

export default function ProjectList() {
	const { data, isPending } = useProjectsMeQuery()

	if (isPending)
		return (
			<div className='flex gap-5 flex-wrap'>
				{Array.from({ length: 10 }).map((_, index) => (
					<Skeleton
						key={`project-loading-${index}`}
						className='w-[200px] h-[200px] rounded-md'
					/>
				))}
			</div>
		)

	return (
		<div className='flex gap-5 flex-wrap items-stretch'>
			{data?.map(project => (
				<Link key={`project-item-${project.id}`} href={`/board/${project.id}`}>
					<ProjectItem project={project} />
				</Link>
			))}
		</div>
	)
}
