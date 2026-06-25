import { useMutation } from '@tanstack/react-query'
import { registerRequest } from '../api/register.api'
import { RegisterForm } from './types'
import { toast } from 'sonner'
import { Dispatch, SetStateAction } from 'react'

export const useRegisterMutation = (
	setIsSuccess: Dispatch<SetStateAction<boolean>>
) => {
	const mutation = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: RegisterForm) => registerRequest(data),
		onSuccess: data => {
			if (data.success) {
				setIsSuccess(true)
				toast.success('Письмо отправлено, проверьте вашу почту')
			}
		}
	})

	return mutation
}
