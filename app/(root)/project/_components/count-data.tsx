import React from 'react'
import { motion } from 'framer-motion'
import { getPhrase } from '@/actions/ibora.action'
import { getProverb } from '@/actions/maqol.action'
import { getArticle } from '@/actions/maqola.action'
import DataCard from '@/app/admin/_components/cards/card-data'

export default function CountData() {
	const [articles, setArticles] = React.useState<number>()
	const [proverbs, setProverbs] = React.useState<number>()
	const [phrases, setPhrases] = React.useState<number>()

	React.useEffect(() => {
		const fetchData = async () => {
			try {
				const [articleData, proverbData, phraseData] = await Promise.all([
					getArticle(),
					getProverb(),
					getPhrase(),
				])
				setArticles(articleData?.length)
				setProverbs(proverbData?.length)
				setPhrases(phraseData?.length)
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}

		fetchData()
	}, [])

	return (
		<div className='relative py-20'>
			{/* Background Effects */}
			<div className='absolute inset-0'>
				<div className='absolute inset-0 bg-gradient-to-b from-white via-blue-50/50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800' />
				<div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,197,253,0.2),transparent_40%)]' />
			</div>

			<div className='container relative mx-auto px-4'>
				<motion.h1
					className='mb-16 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-center text-5xl font-bold text-transparent'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					Foydalanilgan ma&apos;lumotlar soni
				</motion.h1>

				<div className='grid grid-cols-3 gap-6 max-sm:grid-cols-1'>
					{[
						{ title: 'Maqolalar', count: articles },
						{ title: 'Maqollar', count: proverbs },
						{ title: 'Iboralar', count: phrases },
					].map((item, index) => (
						<motion.div
							key={item.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
						>
							<DataCard title={item.title} count={item.count} />
						</motion.div>
					))}
				</div>
			</div>
		</div>
	)
}
