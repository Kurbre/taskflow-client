import { projectsKey } from '@/shared/config/variables'
import { useMutation } from '@tanstack/react-query'
import { CreateProjectForm } from './types'
import { createProjectRequest } from '../api/create-project.api'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export const useCreateProjectMutation = () => {
	const router = useRouter()

	const mutation = useMutation({
		mutationKey: projectsKey.me,
		mutationFn: (data: CreateProjectForm) => createProjectRequest(data),
		onSuccess: data => {
			if (data.title) {
				router.replace('/board')
				toast.success(`Проект ${data.title} успешно создан`)
			}
		}
	})

	return mutation
}
