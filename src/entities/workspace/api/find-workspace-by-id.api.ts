import { axiosMain } from '@/shared/lib/axios'
import { Workspace } from '../model/types'

export const findWorkspaceByIdRequest = async (id: string) => {
	const response = await axiosMain.get<Workspace>(`/workspaces/${id}`)

	return response.data
}
