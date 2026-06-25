import { useMutation } from '@tanstack/react-query'
import { logoutRequest } from '../api/logout.api'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export const useLogoutMutation = () => {
	const router = useRouter()

	const mutation = useMutation({
		mutationKey: ['users', 'auth'],
		mutationFn: () => logoutRequest(),
		onSuccess: data => {
			if (data.success) {
				localStorage.removeItem('accessToken')
				router.push('')
				router.refresh()
				toast.success('Вы успешно вышли из аккаунта')
			}
		}
	})

	return mutation
}
