import { axiosMain } from '@/shared/lib/axios'
import { ConfirmRegisterResponse } from '../model/types'

export const confirmRegisterRequest = async (token: string) => {
	const response = await axiosMain.post<ConfirmRegisterResponse>(
		'/auth/verify-email',
		{},
		{
			params: {
				token
			}
		}
	)

	return response.data
}
