import { SelectProject } from '@/entities/project'

export default function BoardSidebar() {
	return (
		<aside className='w-[280px] py-4 border-r border-r-border bg-background'>
			<div className='container'>
				<SelectProject />
			</div>
		</aside>
	)
}
