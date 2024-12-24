'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'

export function SearchButton() {
	return (
		<motion.button
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			className='flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800'
		>
			<Search className='h-4 w-4' />
			<span className='hidden sm:inline'>Qidiruv</span>
		</motion.button>
	)
}
