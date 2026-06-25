import { axiosMain } from '@/shared/lib/axios'
import { LogoutResponse } from '../model/types'

export const logoutRequest = async () => {
	const response = await axiosMain.post<LogoutResponse>('/auth/logout')

	return response.data
}
