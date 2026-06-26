import { useMutation, useQueryClient } from '@tanstack/react-query'
import { logoutRequest } from '../api/logout.api'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/entities/user'
import { authKeys } from '@/shared/config/variables'

export const useLogoutMutation = () => {
	const router = useRouter()
	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationKey: authKeys.me,
		mutationFn: () => logoutRequest(),
		onSuccess: data => {
			if (data.success) {
				localStorage.removeItem('accessToken')

				queryClient.setQueryData(authKeys.me, null)

				queryClient.removeQueries({
					queryKey: authKeys.me
				})

				toast.success('Вы успешно вышли из аккаунта')

				router.push('/')
				router.refresh()
			}
		},
		onError: () => {
			localStorage.removeItem('accessToken')

			queryClient.setQueryData(authKeys.me, null)

			toast.error('Не удалось выйти из аккаунта')
		}
	})

	return mutation
}
