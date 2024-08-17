import { z } from 'zod'

export const proverbSchema = z.object({
	proverb: z.string().min(5),
})

export const phraseSchema = z.object({
	phrase: z.string().min(5),
	description: z.string().min(5),
})

export const articleSchema = z.object({
	article: z.string().min(20),
	dataOfCreate: z.string().length(10),
	source: z.string().min(3),
	kategoriya: z.string().min(5),
})
