'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, MapPin, PhoneCall, ExternalLink } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import Logo from '@/components/shared/logo'
import { navLink } from '@/constants'

const Footer = () => {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	}

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 },
	}

	return (
		<footer className='relative mt-12 overflow-hidden bg-gradient-to-b from-white to-gray-50 pt-12 dark:from-gray-900 dark:to-gray-800'>
			{/* Background Pattern */}
			<div className='absolute inset-0 bg-grid-gray-900/[0.02] dark:bg-grid-white/[0.02]' />

			<div className='container relative mx-auto max-w-7xl px-4 pb-12'>
				<motion.div
					variants={container}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
					className='grid grid-cols-1 gap-12 md:grid-cols-4'
				>
					{/* Logo and Description */}
					<motion.div
						variants={item}
						className='flex flex-col space-y-4 md:col-span-2'
					>
						<div className='transition-transform duration-300 hover:scale-105'>
							<Logo />
						</div>
						<p className='max-w-md text-gray-600 dark:text-gray-300'>
							heroDescription
						</p>
					</motion.div>

					{/* Navigation Links */}
					<motion.div variants={item} className='flex flex-col space-y-4'>
						<h2 className='bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text font-space-grotesk text-2xl font-bold text-transparent'>
							Sahifalar
						</h2>
						<div className='flex flex-col space-y-2 pt-4'>
							{navLink.map(item => (
								<motion.div
									key={item.route}
									whileHover={{ x: 5 }}
									transition={{ type: 'spring', stiffness: 300 }}
								>
									<Link
										href={`/${item.route}`}
										className='group flex items-center font-medium text-gray-600 transition-colors dark:text-gray-300'
									>
										{item.name}
										<ExternalLink className='ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100' />
									</Link>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Contact Information */}
					<motion.div variants={item} className='flex flex-col space-y-4'>
						<h2 className='bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text font-space-grotesk text-2xl font-bold text-transparent'>
							Bog&apos;lanish
						</h2>
						<div className='flex flex-col space-y-4 pt-4'>
							{/* Phone Numbers */}
							<motion.div
								className='group flex items-start space-x-3'
								whileHover={{ x: 5 }}
							>
								<PhoneCall className='mt-1 h-5 w-5 text-blue-500 dark:text-blue-400' />
								<div className='flex flex-col space-y-2'>
									<a
										href='tel:+998771232115'
										className='text-sm text-gray-600 transition-colors hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400'
									>
										+998 (77) 123-21-15
									</a>
									<Separator className='bg-gray-200 dark:bg-gray-700' />
									<a
										href='tel:+998994573270'
										className='text-sm text-gray-600 transition-colors hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400'
									>
										+998 99 457-32-70
									</a>
								</div>
							</motion.div>

							{/* Email */}
							<motion.div
								className='group flex items-center space-x-3'
								whileHover={{ x: 5 }}
							>
								<Mail className='h-5 w-5 text-blue-500 dark:text-blue-400' />
								<a
									href='mailto:ilxomdeveloper@gmail.com'
									className='text-sm text-gray-600 transition-colors hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400'
								>
									ilxomdeveloper@gmail.com
								</a>
							</motion.div>

							{/* Address */}
							<motion.div
								className='group flex items-center space-x-3'
								whileHover={{ x: 5 }}
							>
								<MapPin className='h-5 w-5 text-blue-500 dark:text-blue-400' />
								<span className='text-sm text-gray-600 dark:text-gray-300'>
									Samarkand city, Uzbekistan
								</span>
							</motion.div>
						</div>
					</motion.div>
				</motion.div>

				{/* Copyright */}
				<motion.div
					variants={item}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
					className='mt-12'
				>
					<Separator className='mb-6 bg-gray-200 dark:bg-gray-700' />
					<div className='flex flex-wrap items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-400'>
						<p>© {new Date().getFullYear()} copyright</p>
						<motion.a
							href='https://t.me/Ilhomdeveloper'
							className='group flex items-center gap-1 transition-colors hover:text-blue-500 dark:hover:text-blue-400'
							whileHover={{ scale: 1.05 }}
						>
							Created by IlhomDeveloper
							<ExternalLink className='h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100' />
						</motion.a>
					</div>
				</motion.div>
			</div>
		</footer>
	)
}

export default Footer
