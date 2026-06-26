import { Avatar, AvatarImage } from '@/shared/ui/avatar'
import { useAuth } from '../model/useAuth'

export default function UserInfo() {
	const { user } = useAuth()

	return (
		<div className='flex items-center gap-2 cursor-pointer'>
			<Avatar size='lg'>
				<AvatarImage src={user?.avatarPath} loading='lazy' />
			</Avatar>
			<span>{user?.email}</span>
		</div>
	)
}
