import { getPhrase } from '@/actions/ibora.action'
import { getProverb } from '@/actions/maqol.action'
import { getArticle } from '@/actions/maqola.action'
import DataCard from '@/app/admin/_components/cards/card-data'
import { useEffect, useState } from 'react'

function CountData() {
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
		<div>
			<h1 className='text-center text-6xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 h-20'>
				Foydalanilgan ma&apos;lumotlar soni
			</h1>
			<div className='grid grid-cols-3 max-sm:grid-cols-1 gap-4 my-16'>
				<DataCard title='Maqolalar' count={articles} />
				<DataCard title='Maqollar' count={proverbs} />
				<DataCard title='Iboralar' count={phrases} />
			</div>
		</div>
	)
}

export default CountData
