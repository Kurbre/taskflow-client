import { axiosMain } from '@/shared/lib/axios'
import { Project } from '../model/types'

export const projectsMeRequest = async () => {
	const response = await axiosMain.get<Project[]>('/projects/me')

	return response.data
}
