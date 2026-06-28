import { CreateProject } from '@/features/create-project'
import { Button } from '@/shared/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function CreateProjectPage() {
	return (
		<div className='flex flex-col py-4 gap-4 w-full'>
			<div className='flex justify-between items-center'>
				<h1 className='text-xl'>Создание проекта</h1>
				<Link href='/board'>
					<Button>
						<ArrowLeft /> Вернуться к проектам
					</Button>
				</Link>
			</div>
			<CreateProject />
		</div>
	)
}
