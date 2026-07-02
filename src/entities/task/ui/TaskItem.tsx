import { Task } from '../model/types'

export default function TaskItem({ task }: { task: Task }) {
	const dragOverHandler = () => {}

	return (
		<div
			className='p-2 bg-white border border-border rounded-md cursor-pointer'
			onDragOver={dragOverHandler}
			draggable
		>
			<span className='text-sm font-semibold'>{task.title}</span>
		</div>
	)
}
