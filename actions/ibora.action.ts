'use server'

import { connectToDatabase } from '@/lib/mongoose'
import { IPrase } from './types'
import Ibora from '@/database/ibora.model'

export const createPhrase = async (data: IPrase) => {
	try {
		await connectToDatabase()
		await Ibora.create(data)
	} catch (error) {
		console.error('Error creating proverb:', error)
		if (error instanceof Error) {
			throw new Error(
				`Something went wrong while creating proverb: ${error.message}`
			)
		} else {
			throw new Error('An unknown error occurred while creating proverb!')
		}
	}
}
export const getPhrase = async () => {
	try {
		await connectToDatabase()
		const data = await Ibora.find()
		//		console.log(data)
		return JSON.parse(JSON.stringify(data))
	} catch (error: any) {
		throw new Error(
			`Something went wrong while creating proverb: ${error.message}`
		)
	}
}
