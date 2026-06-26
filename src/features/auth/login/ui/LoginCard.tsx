'use client'
import { Button } from '@/shared/ui/button'
import { Card, CardContent, CardTitle } from '@/shared/ui/card'
import { Input } from '@/shared/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { loginSchema } from '../model/login.schema'
import { LoginForm } from '../model/types'
import { useLoginMutation } from '../model/use-login-mutation'

export default function RegisterCard() {
	const { register, formState, handleSubmit } = useForm<LoginForm>({
		mode: 'onSubmit',
		resolver: zodResolver(loginSchema)
	})

	const { mutate, isPending } = useLoginMutation()

	const submitHandler = (data: LoginForm) => {
		mutate(data)
	}

	return (
		<Card className='w-full max-w-[500px]'>
			<CardTitle className='px-4 flex flex-col gap-1'>
				<h1 className='text-2xl'>Авторизация</h1>
				<p className='font-normal text-base text-ring'>
					Чтобы авторизоваться заполните поля ниже
				</p>
			</CardTitle>
			<CardContent className='w-full'>
				<form
					className='flex flex-col gap-3'
					onSubmit={handleSubmit(submitHandler)}
				>
					<Input
						placeholder='Email'
						icon={<Mail size={15} />}
						label='Электронная почта'
						error={formState.errors.email?.message}
						disabled={isPending}
						{...register('email')}
					/>
					<Input
						placeholder='Пароль'
						icon={<Mail size={15} />}
						label='Пароль'
						error={formState.errors.password?.message}
						type='password'
						disabled={isPending}
						{...register('password')}
					/>
					<Button
						size='lg'
						className='text-base'
						type='submit'
						disabled={isPending}
					>
						Войти
					</Button>
				</form>
			</CardContent>
		</Card>
	)
}
