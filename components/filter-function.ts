'use client'
import { ArticleType, PhraseType } from '@/app.type'
import { useEffect, useMemo, useState } from 'react'

const FilterInput = (data: ArticleType[], phrase: PhraseType[]) => {
	const [filterValue, setFilterValue] = useState<string[]>([])

	// Helper function to extract first three letters of each word in an array
	const getFirstThreeLetters = (words: string[]) =>
		words.map(word => word.slice(0, 3))

	// Memoized data processing for articles
	const processedArticles = useMemo(() => {
		return data.map(item => {
			const words = item.article.split(' ')
			return getFirstThreeLetters(words).join(' ')
		})
	}, [data])

	// Memoized data processing for phrases
	const processedPhrases = useMemo(() => {
		return phrase.map(item => {
			const words = item.phrase.split(' ')
			return getFirstThreeLetters(words).join(' ')
		})
	}, [phrase])

	useEffect(() => {
		const matchingArticles = processedArticles
			.filter(article =>
				processedPhrases.some(phrase => article.includes(phrase))
			)
			.map(
				matchingArticle =>
					data[processedArticles.indexOf(matchingArticle)].article
			)

		setFilterValue(matchingArticles)
	}, [processedArticles, processedPhrases, data])

	return filterValue
}

export default FilterInput
