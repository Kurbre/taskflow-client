'use client'
import { ColumnItem } from '@/entities/column'
import { useFindWorkspaceByIdQuery } from '@/entities/workspace'
import { BoardParams } from '@/shared/model/board-params.type'
import { useParams } from 'next/navigation'

export default function Board() {
	const { workspaceId } = useParams<BoardParams>()
	const { data } = useFindWorkspaceByIdQuery(workspaceId ?? '')

	console.log(data)

	return (
		<div className='flex gap-5 mt-5'>
			{data?.columns.map(column => (
				<ColumnItem column={column} key={column.id} />
			))}
		</div>
	)
}
