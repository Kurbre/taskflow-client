import { User } from '@/entities/user'
import { loginSchema } from './login.schema'
import z from 'zod'

export type LoginResponse = {
	accessToken: string
	user: User
}

export type LoginForm = z.infer<typeof loginSchema>
