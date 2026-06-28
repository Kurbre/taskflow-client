import RootLayout from '@/app/layouts/RootLayout'
import BackgroundDots from '@/shared/ui/background-dots'
import { BoardSidebar } from '@/widgets/board-sidebar'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { PropsWithChildren } from 'react'

export default function BoardLayout({ children }: PropsWithChildren) {
	return (
		<RootLayout>
			<Header />
			<main className='flex-1 relative flex flex-col'>
				<BackgroundDots />
				<div className='flex gap-5 min-h-[calc(100vh-180px)]'>
					<BoardSidebar />
					<div className='flex flex-col py-4 gap-4 w-full container'>
						{children}
					</div>
				</div>
			</main>
			<Footer />
		</RootLayout>
	)
}
