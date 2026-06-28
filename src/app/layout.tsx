import { PropsWithChildren } from 'react'
import BaseLayout from './layouts/BaseLayout'

export default function Layout({ children }: PropsWithChildren) {
	return <BaseLayout>{children}</BaseLayout>
}
