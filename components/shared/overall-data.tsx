'use client'

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

import { useEffect, useState } from 'react'
import { getArticle } from '@/actions/maqola.action'
import { getProverb } from '@/actions/maqol.action'
import { getPhrase } from '@/actions/ibora.action'
import { TiSortNumericallyOutline } from 'react-icons/ti'
interface DataCardProps {
	title: string
	count: number | undefined
}

const DataCards: React.FC<DataCardProps> = ({ title, count }) => {
	const [displayedCount, setDisplayedCount] = useState(0)

	useEffect(() => {
		if (count !== undefined) {
			const duration = 3000
			const increment = Math.ceil(count / (duration / 100))

			let currentCount = 0
			const counter = setInterval(() => {
				currentCount += increment
				if (currentCount >= count) {
					currentCount = count
					clearInterval(counter)
				}
				setDisplayedCount(currentCount)
			}, 100)

			return () => clearInterval(counter)
		}
	}, [count])

	return (
		<div className='border-2 border-slate-400 border-solid ring-2 rounded-md flex flex-wrap flex-col'>
			<h2 className='text-center font-bold p-2 text-2xl tracking-widest'>
				{title}
			</h2>
			<div className='flex items-center justify-center gap-1'>
				<div className='text-center py-2 text-3xl  p-4'>
					{count === undefined ? '-' : displayedCount}
				</div>
				<span className='text-3xl '>ta</span>
			</div>
		</div>
	)
}

export function OverallData() {
	const [articles, setArticles] = useState<number | undefined>(undefined)
	const [proverbs, setProverbs] = useState<number | undefined>(undefined)
	const [phrases, setPhrases] = useState<number | undefined>(undefined)

	useEffect(() => {
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
		<Card className='max-sm:col-span-4'>
			<CardHeader>
				<CardTitle className='py-1 text-center text-5xl text-blue-500'>
					<TiSortNumericallyOutline className='inline-block mr-8 text-4xl text-yellow-500' />
					Barcha ma&apos;lumotlar :
				</CardTitle>
				<CardDescription>Maqola, ibora, maqollar soni </CardDescription>
			</CardHeader>
			<CardContent>
				<div className='grid grid-cols-3 gap-8 '>
					<DataCards title='Maqolalar' count={articles} />
					<DataCards title='Iboralar' count={phrases} />
					<DataCards title='Maqollar' count={proverbs} />
				</div>
			</CardContent>
		</Card>
	)
}
