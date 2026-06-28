'use client'
import { projectsKey } from '@/shared/config/variables'
import { useQuery } from '@tanstack/react-query'
import { projectsMeRequest } from '../api/projects-me.api'
import { useAuth } from '@/entities/user'

export const useProjectsMeQuery = () => {
	const { isAuth, isLoading } = useAuth()

	const query = useQuery({
		queryKey: projectsKey.me,
		queryFn: projectsMeRequest,
		enabled: isAuth && !isLoading,
		retry: false,
		refetchOnWindowFocus: false
	})

	return query
}
