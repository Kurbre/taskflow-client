'use client'

import { useAuth } from '@/entities/user'
import { useLogoutMutation } from '@/features/auth/logout'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar'
import { Button } from '@/shared/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/shared/ui/dropdown-menu'
import { Skeleton } from '@/shared/ui/skeleton'
import { LogOut } from 'lucide-react'
import Link from 'next/link'

export default function HeaderButtons() {
	const { isAuth, user, isLoading } = useAuth()

	const { mutate, isPending } = useLogoutMutation()

	return (
		<div className='flex items-center gap-5'>
			{isLoading ? (
				<>
					<Skeleton className='w-[150px] h-[50px]' />
				</>
			) : isAuth ? (
				<>
					<DropdownMenu modal={false}>
						<DropdownMenuTrigger asChild>
							<div className='flex items-center gap-2 cursor-pointer'>
								<Avatar size='lg'>
									<AvatarImage src={user?.avatarPath} />
									<AvatarFallback>{user?.email}</AvatarFallback>
								</Avatar>
								<span>{user?.email}</span>
							</div>
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuItem
								className='cursor-pointer'
								disabled={isPending}
								onClick={() => mutate()}
							>
								<LogOut />
								Выйти
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</>
			) : (
				<>
					<Link href='/auth/login'>Войти</Link>
					<Link href='/auth/register'>
						<Button size='lg'>Присоедениться к нам</Button>
					</Link>
				</>
			)}
		</div>
	)
}
