import { ConfirmRegisterCard } from '@/features/auth/register'
import { notFound } from 'next/navigation'

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export default async function AuthConfirmRegisterPage({
	searchParams
}: {
	searchParams: SearchParams
}) {
	const resolvedParams = await searchParams

	const token = resolvedParams.token

	if (!token || typeof token !== 'string') notFound()

	return (
		<div className='flex justify-center items-center min-h-[calc(100vh-200px)]'>
			<ConfirmRegisterCard token={token} />
		</div>
	)
}
