import Image from 'next/image'
import notFoundImage from './assets/images/404.png'
import { Header } from '@/widgets/header'
import { Button } from '@/shared/ui/button'
import { Footer } from '@/widgets/footer'
import RootProvider from './providers/root.provider'
import Link from 'next/link'

export default function NotFound() {
	return (
		<div className='flex min-h-screen flex-col'>
			<RootProvider>
				<Header />

				<main className='flex flex-1 flex-col items-center justify-center gap-6 px-4 text-center'>
					<div className='space-y-2'>
						<h1 className='text-5xl font-bold'>404</h1>
						<h2 className='text-2xl font-semibold'>Страница не найдена</h2>
						<p className='max-w-md text-muted-foreground'>
							Страница, которую вы ищете, не существует или была перемещена.
						</p>
					</div>

					<Link href='/'>
						<Button size='lg'>Вернуться на главную</Button>
					</Link>
				</main>

				<Footer />
			</RootProvider>
		</div>
	)
}
