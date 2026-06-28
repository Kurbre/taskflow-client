'use client'

import { Controller, useForm } from 'react-hook-form'
import { CreateProjectForm } from '../model/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { createProjectSchema } from '../model/create-project.schema'
import { Input } from '@/shared/ui/input'
import { Card, CardContent, CardFooter } from '@/shared/ui/card'
import { Textarea } from '@/shared/ui/textarea'
import { Button } from '@/shared/ui/button'
import { Plus } from 'lucide-react'
import { SelectIcon } from '@/shared/ui/select-icon'
import { HexColorPicker } from 'react-colorful'
import { useCreateProjectMutation } from '../model/use-create-project-mutation'

export default function CreateProject() {
	const { handleSubmit, register, formState, control } =
		useForm<CreateProjectForm>({
			mode: 'onSubmit',
			resolver: zodResolver(createProjectSchema),
			defaultValues: {
				title: '',
				description: '',
				icon: 'FolderKanban',
				color: '#7c3aed'
			}
		})

	const { mutate, isPending } = useCreateProjectMutation()

	const submitHandler = (data: CreateProjectForm) => {
		mutate(data)
	}

	return (
		<Card className='min-h-[calc(100vh-295px)]'>
			<CardContent>
				<form
					onSubmit={handleSubmit(submitHandler)}
					id='create-project'
					className='flex flex-col gap-3'
				>
					<Input
						label='Заголовок'
						error={formState.errors.title?.message}
						{...register('title')}
						disabled={isPending}
					/>
					<Textarea
						label='Описание'
						error={formState.errors.description?.message}
						className='resize-none max-h-[300px]'
						disabled={isPending}
						{...register('description')}
					/>
					<Controller
						name='icon'
						control={control}
						render={({ field }) => (
							<div className='flex flex-col gap-3'>
								<span>Иконка</span>
								<SelectIcon
									value={field.value ?? ''}
									onChange={field.onChange}
									disabled={isPending}
								/>
							</div>
						)}
					/>
					<Controller
						name='color'
						control={control}
						disabled={isPending}
						render={({ field }) => (
							<div className='flex flex-col gap-3 w-fit'>
								<span>Цвет</span>
								<HexColorPicker
									color={field.value}
									aria-disabled={isPending}
									onChange={field.onChange}
								/>
								<Input
									placeholder='Hex'
									value={field.value}
									onChange={e => field.onChange(e.target.value)}
									className='w-full'
									disabled={isPending}
								/>
							</div>
						)}
					/>
				</form>
			</CardContent>
			<CardFooter>
				<Button form='create-project' disabled={isPending}>
					<Plus /> Создать проект
				</Button>
			</CardFooter>
		</Card>
	)
}
