'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeIcon() {
	const { resolvedTheme } = useTheme()
	const isDark = resolvedTheme === 'dark'

	return (
		<>
			<motion.div
				initial={{ scale: 0, rotate: -180 }}
				animate={{ scale: isDark ? 0 : 1, rotate: 0 }}
				transition={{ duration: 0.2 }}
				className='absolute'
			>
				<Sun className='h-5 w-5 text-amber-500' />
			</motion.div>
			<motion.div
				initial={{ scale: 0, rotate: 180 }}
				animate={{ scale: isDark ? 1 : 0, rotate: 0 }}
				transition={{ duration: 0.2 }}
				className='absolute'
			>
				<Moon className='h-5 w-5 text-blue-500' />
			</motion.div>
		</>
	)
}
