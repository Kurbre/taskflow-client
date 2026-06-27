'use client'

import { useAuth, UserInfo } from '@/entities/user'
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
	const { isAuth, isLoading } = useAuth()

	const { mutate, isPending } = useLogoutMutation()

	if (isLoading)
		return (
			<div className='flex items-center gap-2'>
				<Skeleton className='w-[40px] h-[40px] rounded-full' />
				<Skeleton className='w-[150px] h-[24] rounded-md' />
			</div>
		)

	return (
		<div className='flex items-center gap-5'>
			{isAuth ? (
				<>
					<DropdownMenu modal={false}>
						<DropdownMenuTrigger>
							<UserInfo />
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
					<Link href='/board'>
						<Button>Перейти в доску</Button>
					</Link>
				</>
			) : (
				<>
					<Link href='/auth/login'>Войти</Link>
					<Link href='/auth/register'>
						<Button>Присоедениться к нам</Button>
					</Link>
				</>
			)}
		</div>
	)
}
