'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun, Monitor } from 'lucide-react'

interface ThemeMenuProps {
	currentTheme?: string
	onThemeSelect: (theme: string) => void
	onClose: () => void
}

export function ThemeMenu({
	currentTheme,
	onThemeSelect,
	onClose,
}: ThemeMenuProps) {
	const menuRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				onClose()
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [onClose])

	const themes = [
		{ id: 'light', label: 'Yorug', icon: Sun },
		{ id: 'dark', label: 'Tun', icon: Moon },
		{ id: 'system', label: 'System', icon: Monitor },
	]

	return (
		<motion.div
			ref={menuRef}
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -10 }}
			className='absolute right-0 mt-2 w-36 origin-top-right rounded-xl bg-white p-1 shadow-lg ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/5'
		>
			{themes.map(({ id, label, icon: Icon }) => (
				<motion.button
					key={id}
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}
					onClick={() => onThemeSelect(id)}
					className={`
            flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors
            ${
							currentTheme === id
								? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white'
								: 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700/50'
						}
          `}
				>
					<Icon
						className={`h-4 w-4 ${
							id === 'light'
								? 'text-amber-500'
								: id === 'dark'
								? 'text-blue-500'
								: 'text-gray-500 dark:text-gray-400'
						}`}
					/>
					{label}
				</motion.button>
			))}
		</motion.div>
	)
}
