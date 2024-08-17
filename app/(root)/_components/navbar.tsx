'use client'
import { ModeToggle } from '@/components/shared/mood'
import { navLink } from '@/constants'
import { Search } from 'lucide-react'
import Link from 'next/link'
import { SignInButton, SignUpButton, SignedIn, SignedOut } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import UserBox from '@/components/shared/userbox'
import Logo from '@/components/shared/logo'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
function Navbar() {
	const pathname = usePathname()

	return (
		<div className='h-[10vh] backdrop-blur-sm border-b fixed z-40 inset-0 bg-background'>
			<div className='container mx-auto h-[10vh] w-full flex items-center justify-between'>
				<div className='flex justify-center items-center gap-6'>
					{/* Logo */}
					<Link href={'/'}>
						<h1 className='text-4xl font-bold '>
							<Logo />
						</h1>
					</Link>
					{/* NavLink */}
					<div className='flex items-center justify-center gap-8'>
						{navLink.map(item => (
							<Link
								href={item.route}
								key={item.route}
								className={cn(
									'font-semibold hover:text-blue-500',
									pathname === item.route && 'text-blue-500'
								)}
							>
								{item.name}
							</Link>
						))}
					</div>
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
					<div className='ml-8'>
						<div className='flex justify-center items-center gap-2'>
							<SignedIn>
								<UserBox />
							</SignedIn>

							<SignedOut>
								<SignInButton>
									<Button variant={'default'} className=''>
										Kirish
									</Button>
								</SignInButton>
								<SignUpButton>
									<Button variant={'secondary'}>
										Ro&apos;yxatdan o&apos;tish
									</Button>
								</SignUpButton>
							</SignedOut>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
