'use client'
import { Card, CardContent, CardTitle } from '@/shared/ui/card'
import { useForm } from 'react-hook-form'
import { RegisterForm } from '../model/types'
import { Input } from '@/shared/ui/input'
import { Check, CircleCheck, CircleCheckBig, Mail } from 'lucide-react'
import { Button } from '@/shared/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '../model/register-schema'
import { useRegisterMutation } from '../model/use-register.mutation'
import { useState } from 'react'
import Link from 'next/link'

export default function RegisterCard() {
	const [isSuccess, setIsSuccess] = useState(false)

	const { register, formState, handleSubmit } = useForm<RegisterForm>({
		mode: 'onSubmit',
		resolver: zodResolver(registerSchema)
	})

	const { mutate, isPending } = useRegisterMutation(setIsSuccess)

	const submitHandler = (data: RegisterForm) => {
		mutate(data)
	}

	return (
		<Card className='w-full max-w-[500px]'>
			<CardTitle className='px-4 flex flex-col gap-1'>
				<h1 className='text-2xl'>
					{isSuccess ? 'Подтверждение почты' : 'Присоеденяйтесь к нам!'}
				</h1>
				<p className='font-normal text-base text-ring'>
					{isSuccess
						? 'Чтобы окончательно зарегестрироваться, подтвердите вашу почту. Проверьте письмо, которое мы вам прислали'
						: 'Чтобы зарегестрироваться заполните поля ниже'}
				</p>
			</CardTitle>
			<CardContent className='w-full'>
				{isSuccess ? (
					<div className='text-primary flex justify-center flex-col items-center gap-5'>
						<CircleCheckBig size={100} />
						<Link href='https://mail.google.com/mail' target='_blank'>
							<Button size='lg' className='text-base'>
								Перейти в Gmail
							</Button>
						</Link>
					</div>
				) : (
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
						<Input
							placeholder='Повторите пароль'
							icon={<Mail size={15} />}
							label='Повторите пароль'
							error={formState.errors.repeatPassword?.message}
							type='password'
							disabled={isPending}
							{...register('repeatPassword')}
						/>
						<Button
							size='lg'
							className='text-base'
							type='submit'
							disabled={isPending}
						>
							Зарегестрироваться
						</Button>
					</form>
				)}
			</CardContent>
		</Card>
	)
}
