import { z } from 'zod'

export const proverbSchema = z.object({
	proverb: z.string().min(10),
	definition: z.string().min(5),
})

export const phraseSchema = z.object({
	phrase: z.string().min(10),
})

export const articlSchema = z.object({
	article: z.string().min(20),
	dataOfCreate: z.string().min(9),
	source: z.string().min(3),
	kategoriya: z.string().min(5),
})
