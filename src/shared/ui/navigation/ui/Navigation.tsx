import Link from 'next/link'
import { NavigationProps } from '../model/types'
import { Minus } from 'lucide-react'
import { cn } from '@/shared/lib/utils'

export default function Navigation({ navigations }: NavigationProps) {
	return (
		<div className='flex gap-3'>
			{navigations.map((i, index, arr) => (
				<div
					key={i.href + i.label}
					className={cn(
						'flex gap-1 items-center text-sm text-inactive',
						i.className
					)}
				>
					{i.icon}
					<Link href={i.href}>{i.label}</Link>
					{arr.length - 1 !== index && <span className='ml-1'>/</span>}
				</div>
			))}
		</div>
	)
}
