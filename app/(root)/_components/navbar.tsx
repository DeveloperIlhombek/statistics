import { ModeToggle } from '@/components/shared/mood'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { navLink } from '@/constants'
import { Search } from 'lucide-react'
import Link from 'next/link'

function Navbar() {
	return (
		<div className='h-[10vh] backdrop-blur-sm border-b fixed z-40 inset-0 bg-background'>
			<div className='container mx-auto h-[10vh] w-full flex items-center justify-between'>
				{/* Logo */}
				<Link href={'/'}>
					<h1 className='text-4xl font-bold '>Logo of Article</h1>
				</Link>
				{/* NavLink */}
				<div className='flex items-center justify-center gap-4	 '>
					{navLink.map(item => (
						<Link href={item.route} key={item.route}>
							{item.name}
						</Link>
					))}
				</div>

				{/* account */}
				<div className='flex justify-center items-center gap-4'>
					{/* search */}
					<div className='flex justify-center items-center gap-2' role='button'>
						<Search />
						<span className='text-2xl'>Qidiruv</span>
					</div>
					{/* mood */}
					<ModeToggle />
					{/* Accaount */}
					<div>
						<Avatar>
							<AvatarImage src='https://github.com/shadcn.png' />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
