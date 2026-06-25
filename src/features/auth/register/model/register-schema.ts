import { z } from 'zod'

export const registerSchema = z
	.object({
		email: z
			.string({ message: 'Поле Email не может быть пустым' })
			.email('Email не валидный')
			.min(2, 'Минимальная длина Email 6 символов')
			.max(32, 'Максимальная длина Email 64 символа'),
		password: z
			.string({ message: 'Поле пароль не может быть пустым' })
			.min(6, 'Минимальная длина пароля 6 символов')
			.max(32, 'Максимальная длина пароля 32 символа'),

		repeatPassword: z
			.string({ message: 'Поле повтора пароля не может быть пустым' })
			.min(6, 'Минимальная длина пароля 6 символов')
			.max(32, 'Максимальная длина пароля 32 символа')
	})
	.refine(data => data.password === data.repeatPassword, {
		path: ['repeatPassword'],
		message: 'Пароли не совпадают'
	})
