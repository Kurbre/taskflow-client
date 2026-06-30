import { projectsKey } from '@/shared/config/variables'
import { useQuery } from '@tanstack/react-query'
import { findProjectByIdRequestClient } from '../api/find-project-by-id-client.api'

export const useProjectFindByIdQuery = (id: string | undefined) =>
	useQuery({
		queryKey: [...projectsKey.projects, id],
		queryFn: () => findProjectByIdRequestClient(id ?? ''),
		enabled: !!id
	})
