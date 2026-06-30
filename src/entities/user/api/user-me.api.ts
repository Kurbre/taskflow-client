import { axiosMain } from '@/shared/lib/axios'
import { User } from '../model/types'
import { createAxiosServer } from '@/shared/lib/create-axios-server'

export const userMeRequest = async () => {
	const response = await axiosMain.get<User>('/users/me')

	return response.data
}
