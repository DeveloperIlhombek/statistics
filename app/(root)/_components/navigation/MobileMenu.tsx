'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLink } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { AuthButtons } from './AuthButtons'

interface MobileMenuProps {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
}

export function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
	const pathname = usePathname()

	return (
		<>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className='flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800'
			>
				<motion.div initial={false} animate={{ rotate: isOpen ? 90 : 0 }}>
					{isOpen ? <X /> : <Menu />}
				</motion.div>
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						className='absolute left-0 right-0 top-16 bg-background border-b'
					>
						<div className='container mx-auto p-4'>
							<nav className='flex flex-col gap-2'>
								{navLink.map((item, index) => (
									<motion.div
										key={item.route}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: index * 0.1 }}
									>
										<Link
											href={item.route}
											onClick={() => setIsOpen(false)}
											className={cn(
												'flex items-center rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800',
												pathname === item.route &&
													'bg-gray-100 dark:bg-gray-800'
											)}
										>
											<span className='text-lg font-medium'>{item.name}</span>
										</Link>
									</motion.div>
								))}
								<motion.div
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: navLink.length * 0.1 }}
									className='mt-4'
								>
									<AuthButtons />
								</motion.div>
							</nav>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}
