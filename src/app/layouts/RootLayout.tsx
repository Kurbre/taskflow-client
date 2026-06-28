import { Toaster } from 'sonner'
import RootProvider from '../providers/root.provider'

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<RootProvider>
			{children}
			<Toaster position='top-center' />
		</RootProvider>
	)
}
