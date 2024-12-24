import { motion } from 'framer-motion'
import { TiChartLine } from 'react-icons/ti'

interface StatsHeaderProps {
	isVisible: boolean
}

export function StatsHeader({ isVisible }: StatsHeaderProps) {
	return (
		<div className='flex items-center gap-4 mb-8'>
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: isVisible ? 1 : 0 }}
				transition={{ type: 'spring', stiffness: 200, damping: 10 }}
				className='p-3 rounded-full bg-blue-500/10 dark:bg-blue-500/20'
			>
				<TiChartLine className='w-8 h-8 text-blue-600 dark:text-blue-400' />
			</motion.div>

			<motion.div
				initial={{ opacity: 0, x: -20 }}
				animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
				transition={{ duration: 0.5 }}
			>
				<h2 className='text-2xl font-bold text-slate-800 dark:text-white'>
					Barcha ma&apos;lumotlar
				</h2>
				<p className='text-slate-600 dark:text-slate-400'>
					Maqola, ibora, maqollar statistikasi
				</p>
			</motion.div>
		</div>
	)
}
