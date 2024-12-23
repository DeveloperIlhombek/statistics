import React from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

export const ContactForm = () => {
	return (
		<motion.form
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
			className='space-y-4 mb-4'
		>
			<h1 className='mb-6 font-space-grotesk text-4xl font-bold dark:text-white'>
				Contact
			</h1>

			<div className='space-y-2'>
				<motion.input
					whileFocus={{ scale: 1.01 }}
					type='text'
					placeholder='Ismingiz'
					className='w-full rounded-lg border border-gray-200 p-3 outline-none transition-all focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white'
				/>
			</div>

			<div className='space-y-2'>
				<motion.input
					whileFocus={{ scale: 1.01 }}
					type='email'
					placeholder='Email manzilingiz'
					className='w-full rounded-lg border border-gray-200 p-3 outline-none transition-all focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white'
				/>
			</div>

			<div className='space-y-2'>
				<motion.textarea
					whileFocus={{ scale: 1.01 }}
					rows={4}
					placeholder='Xabaringiz'
					className='w-full rounded-lg border border-gray-200 p-3 outline-none transition-all focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white'
				/>
			</div>

			<motion.button
				whileHover={{ scale: 1.02 }}
				whileTap={{ scale: 0.98 }}
				className='flex w-full items-center justify-center gap-2 rounded-lg bg-blue-500 p-3 text-white transition-colors hover:bg-blue-600'
			>
				<Send className='h-4 w-4' />
				Yuborish
			</motion.button>
		</motion.form>
	)
}
