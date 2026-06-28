import { z } from 'zod'

export const createProjectSchema = z.object({
	title: z
		.string()
		.min(1, 'Введите название проекта')
		.min(2, 'Название должно содержать минимум 2 символа')
		.max(32, 'Название должно содержать максимум 32 символа'),

	description: z
		.string()
		.min(1, 'Введите описание проекта')
		.min(2, 'Описание должно содержать минимум 2 символа')
		.max(300, 'Описание должно содержать максимум 300 символов'),

	icon: z.string().optional(),

	color: z
		.string()
		.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, 'Некорректный HEX-цвет')
		.optional()
})
