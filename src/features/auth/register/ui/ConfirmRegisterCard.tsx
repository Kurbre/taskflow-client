'use client'
import { Button } from '@/shared/ui/button'
import { Card, CardContent, CardTitle } from '@/shared/ui/card'
import Link from 'next/link'
import { confirmRegisterRequest } from '../api/confirm-register.api'
import { useEffect, useState } from 'react'
import { notFound, useRouter } from 'next/navigation'
import { useQueryClient } from '@tanstack/react-query'
import { authKeys } from '@/shared/config/variables'
import { toast } from 'sonner'

export default function ConfirmRegisterCard({ token }: { token: string }) {
	const router = useRouter()
	const [isLoading, setIsLoading] = useState(true)
	const queryClient = useQueryClient()

	useEffect(() => {
		let isMounted = true

		async function confirmRegister() {
			try {
				setIsLoading(true)

				const data = await confirmRegisterRequest(token)

				if (!data.accessToken) router.replace('/not-found')

				queryClient.setQueryData(authKeys.me, data.user)

				localStorage.setItem('accessToken', data.accessToken)

				toast.success('Вы успешно зарегестрировались')

				router.replace('/')
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

	return isLoading && <span>Загрузка...</span>
}
