import { cn } from '../lib/utils'

export default function BackgroundDots({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn(
				'pointer-events-none absolute inset-0 -z-10 bg-background bg-fixed bg-[radial-gradient(circle,rgba(0,0,0,0.104)_1px,transparent_1px)] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:linear-gradient(to_bottom,black_0%,black_75%,transparent_100%)]',
				className
			)}
		/>
	)
}
