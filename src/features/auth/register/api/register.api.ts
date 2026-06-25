import { axiosMain } from '@/shared/lib/axios'
import { RegisterForm, RegisterResponse } from '../model/types'

export const registerRequest = async (data: RegisterForm) => {
	const response = await axiosMain.post<RegisterResponse>(
		'/auth/register',
		data
	)

	return response.data
}
