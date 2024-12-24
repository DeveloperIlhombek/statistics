import { useState, useEffect } from 'react'
import { getArticle } from '@/actions/maqola.action'
import { getProverb } from '@/actions/maqol.action'
import { getPhrase } from '@/actions/ibora.action'

export interface StatsData {
	articles?: number
	phrases?: number
	proverbs?: number
}

export function useStats() {
	const [stats, setStats] = useState<StatsData>({})
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchStats = async () => {
			try {
				const [articleData, proverbData, phraseData] = await Promise.all([
					getArticle(),
					getProverb(),
					getPhrase(),
				])

				setStats({
					articles: articleData?.length,
					proverbs: proverbData?.length,
					phrases: phraseData?.length,
				})
			} catch (error) {
				setError("Ma'lumotlarni yuklashda xatolik yuz berdi")
				console.error('Error fetching stats:', error)
			} finally {
				setLoading(false)
			}
		}

		fetchStats()
	}, [])

	return { stats, loading, error }
}
