'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function FloatingImage() {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.8 }}
			className='relative flex items-center justify-center'
		>
			<motion.div
				animate={{
					y: [0, -20, 0],
				}}
				transition={{
					duration: 4,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
				className='relative h-[520px] w-[520px] max-md:h-[400px] max-md:w-[400px]'
			>
				<Image
					src='/assets/hero.png'
					alt='hero'
					fill
					className='object-contain'
					priority
				/>
			</motion.div>

			{/* Decorative Elements */}
			<motion.div
				animate={{
					scale: [1, 1.2, 1],
					opacity: [0.5, 0.8, 0.5],
				}}
				transition={{
					duration: 4,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
				className='absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl'
			/>
		</motion.div>
	)
}
