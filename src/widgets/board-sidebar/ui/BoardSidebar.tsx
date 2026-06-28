import { SelectProject } from '@/entities/project'

export default function BoardSidebar() {
	return (
		<aside className='w-[350px] py-4 px-3 border-r border-r-border bg-background'>
			<div className='containe'>
				<SelectProject />
			</div>
		</aside>
	)
}
