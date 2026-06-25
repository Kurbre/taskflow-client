import { Logo } from '@/shared/ui/logo'

export default function Footer() {
	return (
		<footer className='border-t border-t-border'>
			<div className='container py-4'>
				<div>
					<Logo size='md' />
					<p className='text-xs max-w-[250px] text-ring mt-2'>
						Современная платформа для управления проектами и коммандной работы.
					</p>
				</div>
			</div>
		</footer>
	)
}
