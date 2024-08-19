'use server'

import { connectToDatabase } from '@/lib/mongoose'
import { IArticle } from './types'
import Maqola from '@/database/maqola.model'
import { IArticles } from '@/type'

export const createArticle = async (data: IArticle) => {
	try {
		await connectToDatabase()
		await Maqola.create(data)
	} catch (error) {
		console.error('Error creating article:', error)
		if (error instanceof Error) {
			throw new Error(
				`Something went wrong while creating article: ${error.message}`
			)
		} else {
			throw new Error('An unknown error occurred while creating article!')
		}
	}
}

export const getArticle = async () => {
	try {
		await connectToDatabase()
		const data = await Maqola.find()
		return data as IArticles[]
	} catch (error) {
		console.error('Something went wrong while getting article !')
	}
}
