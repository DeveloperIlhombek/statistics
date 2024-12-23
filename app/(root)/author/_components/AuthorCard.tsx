import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AuthorCardProps {
	name: string
	role: string
	description: string
	image: string
	isReversed?: boolean
	icon: React.ReactNode
}

export const AuthorCard = ({
	name,
	role,
	description,
	image,
	isReversed = false,
	icon,
}: AuthorCardProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			viewport={{ once: true }}
			className={cn(
				'group relative my-12 flex flex-col items-center gap-8 rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl',
				'lg:flex-row lg:gap-12',
				isReversed && 'lg:flex-row-reverse',
				'dark:shadow-blue-500/10 dark:hover:shadow-blue-500/20',
				'bg-white/80 backdrop-blur-sm dark:bg-gray-800/80'
			)}
		>
			{/* Blob Effect */}
			<div className='pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
				<div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-10 blur-lg' />
			</div>

			{/* Image Container */}
			<motion.div
				className='relative h-64 w-64 overflow-hidden rounded-xl shadow-lg'
				whileHover={{ scale: 1.05 }}
				transition={{ type: 'spring', stiffness: 500 }}
			>
				<Image
					src={image}
					alt={name}
					fill
					className='object-cover'
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
				/>
			</motion.div>

			{/* Content */}
			<div className='flex-1 space-y-4 text-center lg:text-left'>
				<motion.div
					className='flex items-center justify-center gap-3 lg:justify-start'
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.2 }}
				>
					<span className='text-blue-500'>{icon}</span>
					<h2 className='bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-2xl font-bold text-transparent'>
						{name}
					</h2>
				</motion.div>

				<motion.h3
					className='text-lg font-semibold text-blue-500 dark:text-blue-400'
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.3 }}
				>
					{role}
				</motion.h3>

				<motion.p
					className='text-gray-600 dark:text-gray-300'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
				>
					{description}
				</motion.p>
			</div>
		</motion.div>
	)
}
