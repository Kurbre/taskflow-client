import { projectsKey } from '@/shared/config/variables'
import { useQuery } from '@tanstack/react-query'
import { findProjectByIdRequest } from '../api/find-project-by-id.api'

export const useProjectFindByIdQuery = (id: string | undefined) =>
	useQuery({
		queryKey: [...projectsKey.projects, id],
		queryFn: () => findProjectByIdRequest(id ?? ''),
		enabled: !!id
	})
