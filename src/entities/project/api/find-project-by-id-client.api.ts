import { axiosMain } from '@/shared/lib/axios'
import { Project } from '../model/types'

export const findProjectByIdRequestClient = async (id: string) => {
	const response = await axiosMain.get<Project>(`/projects/${id}`)

	return response.data
}
