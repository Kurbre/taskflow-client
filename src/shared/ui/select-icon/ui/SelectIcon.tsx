import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/shared/ui/dropdown-menu'
import { Check } from 'lucide-react'
import { Button } from '../../button'
import { SelectIconProps } from '../model/types'
import { projectIconLabels, projectIconMap } from '../model/icons'

export default function SelectIcon({
	onChange,
	value,
	disabled
}: SelectIconProps) {
	const CurrentIcon =
		projectIconMap[value as keyof typeof projectIconMap] ??
		projectIconMap.FolderKanban

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild disabled={disabled}>
				<Button
					type='button'
					variant='outline'
					className='justify-start gap-2 w-fit'
				>
					<CurrentIcon size={22} />
					<span>
						{projectIconLabels[value as keyof typeof projectIconMap] ??
							'Выберите иконку'}
					</span>
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent className='w-64 max-h-[250px]'>
				{Object.keys(projectIconMap).map(icon => {
					const iconName = icon as keyof typeof projectIconMap
					const Icon = projectIconMap[iconName]
					const isSelected = value === iconName

					return (
						<DropdownMenuItem
							key={iconName}
							onClick={() => onChange(iconName)}
							className='flex cursor-pointer items-center justify-between gap-3'
						>
							<div className='flex items-center gap-3'>
								<div className='flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary'>
									<Icon size={22} />
								</div>

								<span>{projectIconLabels[iconName]}</span>
							</div>

							{isSelected && <Check size={16} className='text-primary' />}
						</DropdownMenuItem>
					)
				})}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
