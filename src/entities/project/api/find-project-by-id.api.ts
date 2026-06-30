import { axiosMain } from '@/shared/lib/axios'
import { Project } from '../model/types'
import { cookies } from 'next/headers'
import { createAxiosServer } from '@/shared/lib/create-axios-server'

export const findProjectByIdRequest = async (id: string, isServer = false) => {
	if (isServer) {
		const axiosServer = await createAxiosServer()
		const response = await axiosServer.get<Project>(`/projects/${id}`)

		return response.data
	} else {
		const response = await axiosMain.get<Project>(`/projects/${id}`)

		return response.data
	}
}
