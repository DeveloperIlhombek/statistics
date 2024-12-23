import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Hero() {
	return (
		<div className='relative overflow-hidden'>
			{/* Background Effects */}
			<div className='absolute inset-0'>
				<div className='absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900' />
				<div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(147,197,253,0.3),transparent_40%)]' />
				<div className='absolute inset-0 bg-grid-blue-900/[0.03] dark:bg-grid-white/[0.02]' />
			</div>

			<div className='container relative mx-auto grid min-h-[93vh] max-w-6xl grid-cols-2 gap-8 px-4 max-md:grid-cols-1 max-md:pt-32'>
				<motion.div
					className='flex flex-col space-y-6 self-center'
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
				>
					<motion.h1
						className='font-space-grotesk text-5xl font-bold'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
					>
						<span className='bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent'>
							O&apos;zbekiston
						</span>
						dagi eng mashhur rasmiy, ijtimoiy veb-saytlardagi
						ilmiy-ma&apos;rifiy maqolalar{' '}
						<span className='bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent'>
							statistikasi
						</span>
					</motion.h1>

					<motion.p
						className='text-lg text-gray-600 dark:text-gray-300'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4 }}
					>
						Ma&apos;lumotlar rasmiy manbaalarga asoslangan
					</motion.p>

					<motion.div
						className='flex gap-4'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6 }}
					>
						<Link href='/project'>
							<Button
								size='lg'
								className='rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600'
							>
								Statistikani ko&apos;rish
							</Button>
						</Link>
					</motion.div>
				</motion.div>

				<motion.div
					className='relative self-center'
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8 }}
				>
					<div className='relative h-[480px] w-[480px]'>
						<Image
							src='/assets/about.svg'
							alt='hero'
							fill
							className='object-contain'
							priority
						/>
					</div>

					{/* Decorative elements */}
					<div className='absolute -left-4 -top-4 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl' />
					<div className='absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl' />
				</motion.div>
			</div>
		</div>
	)
}
