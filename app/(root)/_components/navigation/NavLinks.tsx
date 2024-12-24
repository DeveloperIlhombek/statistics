'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { navLink } from '@/constants'
import { cn } from '@/lib/utils'

export function NavLinks() {
	const pathname = usePathname()

	return (
		<div className='flex items-center gap-8'>
			{navLink.map((item, index) => (
				<motion.div
					key={item.route}
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: index * 0.1 }}
				>
					<Link
						href={item.route}
						className={cn(
							'relative font-medium transition-colors hover:text-blue-500',
							pathname === item.route ? 'text-blue-500' : 'text-foreground'
						)}
					>
						<span>{item.name}</span>
						{pathname === item.route && (
							<motion.div
								layoutId='activeNav'
								className='absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500'
								transition={{ type: 'spring', stiffness: 380, damping: 30 }}
							/>
						)}
					</Link>
				</motion.div>
			))}
		</div>
	)
}
