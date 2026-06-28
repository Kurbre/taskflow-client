import { axiosMain } from '@/shared/lib/axios'
import { CreateProjectForm } from '../model/types'
import { Project } from '@/entities/project'

export const createProjectRequest = async (data: CreateProjectForm) => {
	const response = await axiosMain.post<Project>('/projects', data)

	return response.data
}
