import * as React from 'react'

import { cn } from '@/shared/lib/utils'

function Textarea({
	className,
	icon,
	error,
	label,
	id,
	...props
}: React.ComponentProps<'textarea'> & {
	icon?: React.ReactElement
	error?: string
	label?: string
}) {
	const randomId = React.useId()

	return (
		<div className='flex flex-col gap-1'>
			{label && <label className=''>{label}</label>}
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
				<textarea
					id={id ?? randomId}
					data-slot='textarea'
					className={cn(
						'flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40',
						icon && 'pl-8',
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

export { Textarea }
