'use client'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/shared/ui/select'
import { useProjectsMeQuery } from '../model/use-projects-me-query'
import { useEffect, useState } from 'react'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { Skeleton } from '@/shared/ui/skeleton'

export default function SelectProject() {
	const [isMounted, setIsMounted] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const { data, isPending } = useProjectsMeQuery()

	useEffect(() => {
		setIsMounted(true)
	}, [])

	if (!isMounted) {
		return <Skeleton className='h-8 w-full' />
	}

	return (
		<Select open={isOpen} onOpenChange={setIsOpen}>
			<SelectTrigger className='w-full' disabled={isPending}>
				<SelectValue
					placeholder={isPending ? 'Загрузка...' : 'Выберите проект'}
				/>
			</SelectTrigger>
			<SelectContent position='popper'>
				{data?.map(project => (
					<Link href={`/board/${project.id}`} key={project.id}>
						<SelectItem value={project.id}>{project.title}</SelectItem>
					</Link>
				))}
				<Link href='/board/new'>
					<SelectItem value='new'>
						<Plus /> Создать новый проект
					</SelectItem>
				</Link>
			</SelectContent>
		</Select>
	)
}
