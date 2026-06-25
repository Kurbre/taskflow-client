import { axiosMain } from '@/shared/lib/axios'
import { User } from '../model/types'

export const userMeRequest = async () => {
	const response = await axiosMain.get<User>('/users/me')

	return response.data
}
