import { useQuery } from '@tanstack/react-query'
import { userMeRequest } from '../api/user-me.api'
import { useEffect, useState } from 'react'
import { authKeys } from '@/shared/config/variables'

export const useAuth = () => {
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	const mutation = useQuery({
		queryKey: authKeys.me,
		queryFn: () => userMeRequest(),
		staleTime: 5 * 60 * 1000,
		gcTime: 30 * 60 * 1000,
		refetchOnWindowFocus: false,
		enabled: isMounted,
		retry: false
	})

	return {
		isAuth: !!mutation.data?.id,
		user: mutation.data,
		isLoading: !isMounted || mutation.isLoading,
		isError: mutation.isError,
		refetch: mutation.refetch
	}
}
