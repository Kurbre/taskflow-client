import { Logo } from '@/shared/ui/logo'
import { navigationLinks } from '../models/navigation-links'
import Link from 'next/link'
import { Button } from '@/shared/ui/button'

export default function Header() {
	return (
		<header className='border-b border-b-border py-2 shadow-sm'>
			<div className='container flex items-center justify-between gap-5'>
				<Logo />
				<div>
					{navigationLinks.map(i => (
						<Link href={i.href} key={i.href + i.label}>
							<Button variant='link'>{i.label}</Button>
						</Link>
					))}
				</div>
				<div className='flex items-center gap-5'>
					<Link href='/auth/login'>Войти</Link>
					<Link href='/auth/register'>
						<Button size='lg'>Присоедениться к нам</Button>
					</Link>
				</div>
			</div>
		</header>
	)
}
