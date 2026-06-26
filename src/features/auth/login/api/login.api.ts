import { axiosMain } from '@/shared/lib/axios'
import { LoginForm, LoginResponse } from '../model/types'

export const loginRequest = async (data: LoginForm) => {
	const response = await axiosMain.post<LoginResponse>('/auth/login', data)

	return response.data
}
