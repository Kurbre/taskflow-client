import Image from 'next/image'
import Link from 'next/link'
import logoImage from '../assets/logo.png'
import { LogoProps, LogoSize } from '../model/types'
import { cn } from '@/shared/lib/utils'

export default function Logo({ size = 'lg' }: LogoProps) {
	const logoSize = {
		md: {
			width: 35,
			height: 35
		},
		lg: {
			width: 50,
			height: 50
		}
	}

	const sizeTitle = {
		md: 'text-xl',
		lg: 'text-2xl'
	}

	return (
		<Link href='/' draggable={false} className='flex items-center gap-3'>
			<Image
				src={logoImage}
				alt={logoImage.src}
				width={logoSize[size].width}
				height={logoSize[size].height}
			/>
			<h1 className={cn('font-semibold', sizeTitle[size])}>Taskflow</h1>
		</Link>
	)
}
