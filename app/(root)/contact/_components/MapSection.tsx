import React from 'react'
import { motion } from 'framer-motion'

export const MapSection = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			className='relative overflow-hidden rounded-2xl shadow-lg'
		>
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1316.8203047107272!2d66.96102085470251!3d39.644797398263805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d18d2d1e7d5bd%3A0xa6176e47010064b6!2sScientific%20Library%20of%20Samarkand%20State%20University!5e0!3m2!1sen!2s!4v1722400363986!5m2!1sen!2s'
				loading='lazy'
				className='h-96 w-full transition-transform duration-300 hover:scale-105'
			/>

			{/* Overlay on hover */}
			<div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100' />
		</motion.div>
	)
}
