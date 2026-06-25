import z from 'zod'
import { registerSchema } from './register-schema'
import { User } from '@/entities/user'

export type RegisterForm = z.infer<typeof registerSchema>

export type RegisterResponse = {
	success: boolean
	message: string
}

export type ConfirmRegisterResponse = {
	user: User
	accessToken: string
}
