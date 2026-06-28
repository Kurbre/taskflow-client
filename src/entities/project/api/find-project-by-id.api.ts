import { axiosMain, axiosServer } from '@/shared/lib/axios'
import { Project } from '../model/types'
import { cookies } from 'next/headers'

export const findProjectByIdRequest = async (id: string, isServer = false) => {
	if (isServer) {
		const cookiesStore = cookies()
		const token = (await cookiesStore).get('refreshToken')
		const response = await axiosServer.get<Project>(`/projects/${id}`, {
			headers: {
				Cookie: `refreshToken=${token?.value}`
			}
		})

		return response.data
	} else {
		const response = await axiosMain.get<Project>(`/projects/${id}`)

		return response.data
	}
}
