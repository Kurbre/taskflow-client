import * as React from 'react'

import { cn } from '@/shared/lib/utils'

function Input({
	className,
	type,
	icon,
	label,
	error,
	id,
	...props
}: React.ComponentProps<'input'> & {
	icon?: React.ReactElement
	error?: string
	label?: string
}) {
	const randomId = React.useId()

	return (
		<div className='flex flex-col gap-1'>
			{label && <label className='font-semibold'>{label}</label>}
			<div className='relative'>
				{icon && (
					<div
						className={cn(
							'pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground',
							error && 'text-red-500'
						)}
					>
						{icon}
					</div>
				)}
				<input
					id={id ?? randomId}
					type={type}
					data-slot='input'
					className={cn(
						'h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40',
						'pl-8',
						error &&
							'border-red-500 focus-visible:ring-0 focus-visible:border-red-500',
						className
					)}
					{...props}
				/>
			</div>
			{error && <span className='text-red-500'>{error}</span>}
		</div>
	)
}

export { Input }
