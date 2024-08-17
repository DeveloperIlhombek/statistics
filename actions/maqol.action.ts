'use server'

import { connectToDatabase } from '@/lib/mongoose'
import { IProverb } from './types'
import Maqol from '@/database/maqol.model'

export const createProverb = async (data: IProverb) => {
	try {
		await connectToDatabase()
		await Maqol.create(data)
	} catch (error: any) {
		console.error('Error creating proverb:', error) // Xatoni konsolda ko'rsatish
		if (error instanceof Error) {
			throw new Error(
				`Something went wrong while creating proverb: ${error.message}`
			)
		} else {
			throw new Error('An unknown error occurred while creating proverb!')
		}
	}
}
