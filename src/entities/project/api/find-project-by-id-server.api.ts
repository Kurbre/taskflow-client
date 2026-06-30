import { createAxiosServer } from '@/shared/lib/create-axios-server'
import { Project } from '../model/types'

export const findProjectByIdRequestServer = async (id: string) => {
	const axiosServer = await createAxiosServer()
	const response = await axiosServer.get<Project>(`/projects/${id}`)

	return response.data
}
