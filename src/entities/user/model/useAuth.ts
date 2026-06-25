import { useQuery } from '@tanstack/react-query'
import { userMeRequest } from '../api/user-me.api'

export const useAuth = () => {
	const hasAccessToken =
		typeof window !== 'undefined' && !!localStorage.getItem('access_token')

	const mutation = useQuery({
		queryKey: ['users'],
		queryFn: () => userMeRequest(),
		staleTime: 5 * 60 * 1000,
		gcTime: 30 * 60 * 1000,
		refetchOnWindowFocus: false,
		enabled: hasAccessToken,
		retry: false
	})

	return {
		isAuth: !!mutation.data?.id,
		user: mutation.data,
		isLoading: mutation.isLoading
	}
}
