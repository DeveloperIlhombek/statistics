import { motion } from 'framer-motion'
import { AnimatedCounter } from '@/components/ui/animated-counter'

interface DataCardProps {
	title: string
	count: number | undefined
	delay: number
}

export function DataCard({ title, count, delay }: DataCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay }}
			className='relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/50 to-white/30 dark:from-slate-800/50 dark:to-slate-800/30 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 p-6 shadow-xl'
		>
			<div className='absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5' />

			<h3 className='relative text-xl font-semibold text-slate-800 dark:text-white mb-4'>
				{title}
			</h3>

			<div className='relative flex items-baseline gap-1'>
				<AnimatedCounter
					value={count}
					className='text-4xl font-bold text-blue-600 dark:text-blue-400'
				/>
				<span className='text-lg text-slate-600 dark:text-slate-400'>ta</span>
			</div>

			<motion.div
				className='absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500'
				initial={{ width: 0 }}
				animate={{ width: '100%' }}
				transition={{ duration: 1, delay: delay + 0.5 }}
			/>
		</motion.div>
	)
}
