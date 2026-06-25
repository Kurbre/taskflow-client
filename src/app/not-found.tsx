import Image from 'next/image'
import notFoundImage from './assets/images/404.png'

export default function NotFound() {
	return (
		<div className='flex flex-col items-center'>
			<Image
				src={notFoundImage}
				alt={notFoundImage.src}
				className='h-[calc(100vh-200px)] w-[calc(100vw-60%)]'
			/>
			<span className='absolute top-[calc(50%+180px)] tracking-widest text-6xl font-normal font-pacifico text-[#F57BA0] [-webkit-text-stroke-width:2px] [-webkit-text-stroke-color:#E1476B]'>
				Страница не найдена
			</span>
		</div>
	)
}
