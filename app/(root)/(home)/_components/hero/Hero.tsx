'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TypewriterEffect } from './TypewriterEffect'
import { ActionButtons } from './ActionButtons'
import { FloatingImage } from './FloatingImage'

export default function Hero() {
	const words = [
		{ text: 'maqola', className: 'text-cyan-500' },
		{ text: 'maqol', className: 'text-cyan-500' },
		{ text: 'ibora', className: 'text-cyan-500' },
	]

	return (
		<div className='relative min-h-[80vh] overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 my-24'>
			{/* Background Pattern */}
			<div className='absolute inset-0 bg-grid-gray-900/[0.02] dark:bg-grid-white/[0.02]' />

			<div className=' relative mx-auto grid min-h-[80vh] max-w-6xl grid-cols-2 gap-12 px-4 max-md:grid-cols-1'>
				{/* Content Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className='flex flex-col justify-center space-y-6'
				>
					{/* Heading */}
					<h1 className='font-space-grotesk text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-5xl'>
						Veb-sahifalarda foydalanilgan <TypewriterEffect words={words} />{' '}
						haqida tez va oson{' '}
						<span className='bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent'>
							ma&apos;lumotlar
						</span>
					</h1>

					{/* Description */}
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2 }}
						className='max-w-lg text-gray-600 dark:text-gray-300'
					>
						web-sahifalar ibora va maqollardan qanchalik ko&apos;p
						foydalanilganligi haqida diagrammalar orqali bilib oling
					</motion.p>

					{/* Action Buttons */}
					<ActionButtons />
				</motion.div>

				{/* Image Section */}
				<FloatingImage />
			</div>
		</div>
	)
}
