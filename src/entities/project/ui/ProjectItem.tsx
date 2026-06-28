import { projectIconMap } from '@/shared/ui/select-icon'
import { ProjectItemProps } from '../model/types'
import { Button } from '@/shared/ui/button'

export default function ProjectItem({ project }: ProjectItemProps) {
	const Icon = projectIconMap[project.icon]

	return (
		<div className='rounded-md w-[250px] flex flex-col h-full bg-background shadow-sm p-3 border border-border'>
			<div className='flex-1'>
				<div className='flex size-15 items-center justify-center rounded-lg bg-primary/10 text-primary'>
					<Icon size={41} />
				</div>
				<h3 className='font-semibold mt-3'>{project.title}</h3>
				<span className='line-clamp-2 text-xs text-ring'>
					{project.description}
				</span>
			</div>
			<Button variant='secondary' className='w-full mt-5'>
				Открыть проект
			</Button>
		</div>
	)
}
