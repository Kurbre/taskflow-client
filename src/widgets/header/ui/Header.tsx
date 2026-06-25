import { Logo } from '@/shared/ui/logo'
import { navigationLinks } from '../models/navigation-links'
import Link from 'next/link'
import { Button } from '@/shared/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger
} from '@/shared/ui/dropdown-menu'
import { ChevronDown } from 'lucide-react'
import HeaderButtons from './HeaderButtons'

export default function Header() {
	return (
		<header className='border-b border-b-border py-2 shadow-sm'>
			<div className='container flex items-center justify-between gap-5'>
				<Logo />
				<div>
					{navigationLinks.map(i =>
						i.items ? (
							<DropdownMenu key={i.href + i.label} modal={false}>
								<DropdownMenuTrigger asChild>
									<Button variant='ghost'>
										{i.label}
										<ChevronDown />
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									{i.items.map(item => (
										<Link href={item.href} key={item.label + item.href}>
											<Button variant='ghost' className='w-full justify-start'>
												{item.label}
											</Button>
										</Link>
									))}
								</DropdownMenuContent>
							</DropdownMenu>
						) : (
							<Link href={i.href} key={i.href + i.label}>
								<Button variant='link'>{i.label}</Button>
							</Link>
						)
					)}
				</div>
				<HeaderButtons />
			</div>
		</header>
	)
}
