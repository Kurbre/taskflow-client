import { createAxiosServer } from '@/shared/lib/create-axios-server'
import { Workspace } from '../model/types'

export const findWorkspaceByIdServerRequest = async (id: string) => {
	const axiosServer = await createAxiosServer()

	const response = await axiosServer.get<Workspace>(`/workspaces/${id}`)

	return response.data
}
