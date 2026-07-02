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
import { ArrowDown, ChevronDown, Plus } from 'lucide-react'
import Link from 'next/link'
import { Skeleton } from '@/shared/ui/skeleton'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/shared/ui/dropdown-menu'
import { Button } from '@/shared/ui/button'
import { useParams, usePathname } from 'next/navigation'
import { useProjectFindByIdQuery } from '../model/use-project-find-by-id-query'
import { cn } from '@/shared/lib/utils'
import { getProjectParamId } from '../lib/get-project-param-id'
import { BoardParams } from '@/shared/model/board-params.type'

export default function SelectProject() {
	const [isMounted, setIsMounted] = useState(false)
	const [isOpen, setIsOpen] = useState(false)

	const { data, isPending } = useProjectsMeQuery()

	const { id } = useParams<BoardParams>()

	const selectedProject = data?.find(i => i.id === id)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	if (!isMounted) {
		return <Skeleton className='h-8 w-full' />
	}

	return (
		<DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
			<DropdownMenuTrigger className='w-full' disabled={isPending} asChild>
				<Button variant='outline' className='justify-between'>
					{isPending
						? 'Загрузка...'
						: selectedProject
							? selectedProject.title
							: 'Выберите проект'}
					<ChevronDown
						className={cn(
							'transition-transform duration-200 ease-in',
							isOpen && 'rotate-180'
						)}
					/>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{data?.map(project => (
					<Link href={`/board/${project.id}`} key={project.id}>
						<DropdownMenuItem className='cursor-pointer'>
							{project.title}
						</DropdownMenuItem>
					</Link>
				))}
				<Link href='/board/new'>
					<DropdownMenuItem className='cursor-pointer'>
						<Plus /> Создать новый проект
					</DropdownMenuItem>
				</Link>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
