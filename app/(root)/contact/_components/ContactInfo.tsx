import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

export const ContactInfo = () => {
	return (
		<motion.div
			initial={{ opacity: 0, x: -20 }}
			animate={{ opacity: 1, x: 0 }}
			className='flex flex-col'
		>
			<h1 className='font-space-grotesk text-4xl font-bold dark:text-white'>
				Bizning manzil
			</h1>
			<p className='mt-2 text-muted-foreground'>
				Samarqand davlat universiteti ilmiy kutubxonasi
			</p>

			<div className='mt-12 space-y-4'>
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.2 }}
					className='flex items-center gap-3'
				>
					<div className='flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900'>
						<Mail className='h-4 w-4 text-blue-600 dark:text-blue-400' />
					</div>
					<p className='text-sm dark:text-gray-300'>ilxomdeveloper@gmail.com</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.3 }}
					className='flex items-center gap-3'
				>
					<div className='flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900'>
						<Phone className='h-4 w-4 text-blue-600 dark:text-blue-400' />
					</div>
					<p className='text-sm dark:text-gray-300'>+998 77 123-21-15</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.4 }}
					className='flex items-center gap-3'
				>
					<div className='flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900'>
						<MapPin className='h-4 w-4 text-blue-600 dark:text-blue-400' />
					</div>
					<p className='text-sm dark:text-gray-300'>
						Samarqand sh., Universitet xiyoboni, 15-uy
					</p>
				</motion.div>
			</div>
		</motion.div>
	)
}
