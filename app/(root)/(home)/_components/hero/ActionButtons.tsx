'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function ActionButtons() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
			className='flex flex-wrap gap-4'
		>
			<Link href='/'>
				<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
					<Button
						variant='outline'
						size='lg'
						className='rounded-full border-2 border-blue-500 bg-transparent text-blue-500 hover:bg-blue-500 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900'
					>
						Iboralar
					</Button>
				</motion.div>
			</Link>

			<Link href='/'>
				<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
					<Button
						size='lg'
						className='rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 dark:from-blue-400 dark:to-cyan-400 dark:hover:from-blue-500 dark:hover:to-cyan-500'
					>
						Diagramma
					</Button>
				</motion.div>
			</Link>
		</motion.div>
	)
}
