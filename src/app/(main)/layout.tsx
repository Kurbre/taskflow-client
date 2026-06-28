import BackgroundDots from '@/shared/ui/background-dots'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import RootLayout from '../layouts/RootLayout'

export default function Layout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<RootLayout>
			<Header />
			<main className='flex-1 relative flex flex-col'>
				<BackgroundDots />
				{children}
			</main>
			<Footer />
		</RootLayout>
	)
}
