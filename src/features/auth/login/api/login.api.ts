import { axiosMain } from '@/shared/lib/axios'
import { LoginForm, LoginResponse } from '../model/types'
import { isAxiosError } from 'axios'
import { type ApiError } from '@/shared/model/error.types'

export const loginRequest = async (data: LoginForm) => {
	try {
		const response = await axiosMain.post<LoginResponse>('/auth/login', data)

		return response.data
	} catch (err) {
		if (isAxiosError(err)) {
			const message = err.response?.data?.message ?? 'Ошибка авторизации'
			throw new Error(message)
		}

		if (err instanceof Error) {
			throw new Error(err.message)
		}

		throw new Error('Server error')
	}
}
