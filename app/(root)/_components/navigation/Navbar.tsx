'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { MobileMenu } from '../navigation/MobileMenu'
import { SearchButton } from './SearchButton'
import Logo from '@/components/shared/logo'
import { NavLinks } from './NavLinks'
import { ModeToggle } from '@/components/shared/mood-toggle'
import UserBox from '@/components/shared/userbox'
import { AuthButtons } from './AuthButtons'

// Dynamically import Clerk components
const SignedIn = dynamic(
	() => import('@clerk/nextjs').then(mod => mod.SignedIn),
	{ ssr: false }
)
const SignedOut = dynamic(
	() => import('@clerk/nextjs').then(mod => mod.SignedOut),
	{ ssr: false }
)

export default function Navbar() {
	const [isOpen, setIsOpen] = React.useState(false)

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			className='fixed left-0 right-0 top-0 z-40 border-b bg-background/80 backdrop-blur-xl'
		>
			<div className='container mx-auto'>
				<div className='flex h-16 items-center justify-between px-4'>
					{/* Logo Section */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						className='flex items-center gap-6'
					>
						<Link href='/' className='flex items-center'>
							<Logo />
						</Link>

						{/* Desktop Navigation */}
						<div className='hidden lg:block'>
							<NavLinks />
						</div>
					</motion.div>

					{/* Actions Section */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						className='flex items-center gap-4'
					>
						<SearchButton />
						<ModeToggle />

						{/* Auth Buttons */}
						<div className='hidden lg:block'>
							<SignedIn>
								<UserBox />
							</SignedIn>
							<SignedOut>
								<AuthButtons />
							</SignedOut>
						</div>

						{/* Mobile Menu Button */}
						<div className='lg:hidden'>
							<MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
						</div>
					</motion.div>
				</div>
			</div>
		</motion.nav>
	)
}
