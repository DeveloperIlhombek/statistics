'use client'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { DataCard } from './data-card'
import { StatsHeader } from './stats-header'
import { useStats } from '@/lib/hooks/use-stats'
import { useIntersection } from '@/lib/hooks/use-intersection'

export function OverallData() {
	const containerRef = useRef<HTMLDivElement>(null)
	const isVisible = useIntersection(containerRef, { threshold: 0.2 })
	const { stats, loading, error } = useStats()

	if (error) {
		return <Card className='p-6 text-center text-red-500'>{error}</Card>
	}

	return (
		<Card
			ref={containerRef}
			className='p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border-none shadow-xl'
		>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: isVisible ? 1 : 0 }}
				transition={{ duration: 0.5 }}
				className='space-y-8'
			>
				<StatsHeader isVisible={isVisible} />

				<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
					<DataCard
						title='Maqolalar'
						count={loading ? undefined : stats.articles}
						delay={isVisible ? 0 : 0}
					/>
					<DataCard
						title='Iboralar'
						count={loading ? undefined : stats.phrases}
						delay={isVisible ? 0.2 : 0}
					/>
					<DataCard
						title='Maqollar'
						count={loading ? undefined : stats.proverbs}
						delay={isVisible ? 0.4 : 0}
					/>
				</div>
			</motion.div>
		</Card>
	)
}
