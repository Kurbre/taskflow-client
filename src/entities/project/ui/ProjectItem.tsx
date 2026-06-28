import { ProjectItemProps } from '../model/types'

export default function ProjectItem({ project }: ProjectItemProps) {
	return (
		<div className='rounded-md bg-background shadow-md px-5 py-3'>
			{project.title}
		</div>
	)
}
