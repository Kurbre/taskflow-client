import { SpacesTreeProps } from '../model/types'

export default function SpacesTree({ spaces }: SpacesTreeProps) {
	return (
		<div>
			{spaces.map(space => (
				<div key={space.id} className='flex flex-col gap-2'>
					<span>{space.title}</span>
					<div className='flex flex-col'>
						{space.workspaces.map(workspace => (
							<div key={workspace.id}>{workspace.title}</div>
						))}
					</div>
				</div>
			))}
		</div>
	)
}
