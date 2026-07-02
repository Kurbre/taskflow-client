import { workspacesKey } from '@/shared/config/variables'
import { useQuery } from '@tanstack/react-query'
import { findWorkspaceByIdRequest } from '../api/find-workspace-by-id.api'

export const useFindWorkspaceByIdQuery = (id: string) =>
	useQuery({
		queryKey: [...workspacesKey.workspaces, id],
		queryFn: () => findWorkspaceByIdRequest(id)
	})
