import { ProjectList } from '@/entities/project'
import { Button } from '@/shared/ui/button'
import { BoardSidebar } from '@/widgets/board-sidebar'
import { Plus } from 'lucide-react'
import Link from 'next/link'

export default function BoardPage() {
	return (
		<div className='flex flex-col py-4 gap-4 w-full'>
			<div className='flex justify-between items-center'>
				<h1 className='text-3xl font-semibold'>Выберите проект</h1>
				<Link href='/board/new'>
					<Button>
						<Plus /> Создать проект
					</Button>
				</Link>
			</div>
			<ProjectList />
		</div>
	)
}
