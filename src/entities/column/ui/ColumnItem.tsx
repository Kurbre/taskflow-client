import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/shared/ui/dropdown-menu'
import { Column } from '../model/types'
import { Ellipsis } from 'lucide-react'
import { Button } from '@/shared/ui/button'
import { TaskItem } from '@/entities/task'

export default function ColumnItem({ column }: { column: Column }) {
	return (
		<div className='border-border border p-3 rounded-lg bg-[#F8F8FC] min-w-[200px]'>
			<div className='flex items-center justify-between'>
				<span className='flex items-center gap-2'>
					<div
						className={`size-2 rounded-full`}
						style={{
							background: column.color
						}}
					/>{' '}
					{column.title}
					<div className='bg-[#ECEBF3] ml-1 size-5 text-ring rounded-full text-xs flex items-center justify-center'>
						{column.tasks.length}
					</div>
				</span>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant='ghost' className='text-ring' size='icon-sm'>
							<Ellipsis />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuItem>123</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
			<div className='flex flex-col gap-2 mt-2'>
				{column.tasks.map(task => (
					<TaskItem task={task} key={task.id} />
				))}
			</div>
		</div>
	)
}
