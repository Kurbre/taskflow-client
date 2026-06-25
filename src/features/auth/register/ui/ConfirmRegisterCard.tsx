'use client'
import { Button } from '@/shared/ui/button'
import { Card, CardContent, CardTitle } from '@/shared/ui/card'
import Link from 'next/link'
import { confirmRegisterRequest } from '../api/confirm-register.api'
import { useEffect, useState } from 'react'
import { notFound, useRouter } from 'next/navigation'

export default function ConfirmRegisterCard({ token }: { token: string }) {
	const router = useRouter()
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		let isMounted = true

		async function confirmRegister() {
			try {
				setIsLoading(true)

				const data = await confirmRegisterRequest(token)

				if (!data.accessToken) router.replace('/not-found')

				localStorage.setItem('accessToken', data.accessToken)
			} catch {
				if (!isMounted) return

				setIsLoading(false)

				router.replace('/not-found')
			} finally {
				if (!isMounted) return

				setIsLoading(false)
			}
		}

		confirmRegister()

		return () => {
			isMounted = false
		}
	}, [token])

	return isLoading ? (
		<span>Загрузка...</span>
	) : (
		<Card className='w-full max-w-[400px]'>
			<CardTitle className='px-4'>Регистрация успешна</CardTitle>
			<CardContent className='flex flex-col items-center gap-5'>
				<span>
					Вы успешно зарегестрировались, вы можете перейти в профиль по кнопку
					ниже
				</span>
				<Link href='/profile' className='w-full'>
					<Button className='w-full'>Профиль</Button>
				</Link>
			</CardContent>
		</Card>
	)
}
