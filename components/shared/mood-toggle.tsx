'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { ThemeIcon } from '../ui/theme-icon'
import { ThemeMenu } from '../ui/theme-menu'

export function ModeToggle() {
	const { theme, setTheme } = useTheme()
	const [isOpen, setIsOpen] = React.useState(false)

	return (
		<div className='relative'>
			<motion.button
				whileTap={{ scale: 0.95 }}
				onClick={() => setIsOpen(!isOpen)}
				className='relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
			>
				<ThemeIcon />
			</motion.button>

			{isOpen && (
				<ThemeMenu
					currentTheme={theme}
					onThemeSelect={newTheme => {
						setTheme(newTheme)
						setIsOpen(false)
					}}
					onClose={() => setIsOpen(false)}
				/>
			)}
		</div>
	)
}
