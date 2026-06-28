import { useMutation, useQueryClient } from '@tanstack/react-query'
import { LoginForm } from './types'
import { loginRequest } from '../api/login.api'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { authKeys } from '@/shared/config/variables'

export const useLoginMutation = () => {
	const router = useRouter()
	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationKey: authKeys.me,
		mutationFn: (data: LoginForm) => loginRequest(data),
		onSuccess: data => {
			if (data.accessToken) {
				localStorage.setItem('accessToken', data.accessToken)

				queryClient.setQueryData(authKeys.me, data.user)

				toast.success(
					`Здравствуйте ${data.user.email}, вы успешно вошли в аккаунт`
				)

				router.push('/')
				router.refresh()
			}
		},
		onError: error => {
			console.log(error)

			toast.error(error.message)
		}
	})

	return mutation
}
