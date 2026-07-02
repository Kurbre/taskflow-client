import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/shared/ui/accordion'
import { SpacesTreeProps } from '../model/types'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { BoardParams } from '@/shared/model/board-params.type'
import { cn } from '@/shared/lib/utils'

export default function SpacesTree({ spaces }: SpacesTreeProps) {
	const { id, workspaceId } = useParams<BoardParams>()

	return (
		<Accordion type='multiple'>
			<AccordionItem value='spaces'>
				<AccordionTrigger>Spaces</AccordionTrigger>
				<AccordionContent className='pl-2'>
					{spaces.map(space => (
						<Accordion type='multiple' key={space.id} className='-mt-2'>
							<AccordionItem value={space.id}>
								<AccordionTrigger>{space.title}</AccordionTrigger>
								<AccordionContent>
									{space.workspaces.map(workspace => (
										<Link
											href={`/board/${id}/${workspace.id}`}
											key={workspace.id}
											className={cn(
												'pl-3',
												workspaceId === workspace.id &&
													'text-primary hover:text-primary!'
											)}
										>
											{workspace.title}
										</Link>
									))}
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					))}
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}
