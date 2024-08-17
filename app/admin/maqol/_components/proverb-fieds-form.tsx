'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { proverbSchema } from '@/lib/valitadions'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { createProverb } from '@/actions/maqol.action'
import { toast } from 'sonner'

const defaultVal = {
	proverb: '',
}

function ProverbFiedsForm() {
	const [isloading, setIsLoading] = useState(false)
	const form = useForm<z.infer<typeof proverbSchema>>({
		resolver: zodResolver(proverbSchema),
		defaultValues: defaultVal,
	})

	function onSubmit(values: z.infer<typeof proverbSchema>) {
		setIsLoading(true)

		const promise = createProverb({ ...values })
			.then(() => {
				form.reset()
			})
			.finally(() => setIsLoading(false))
		toast.promise(promise, {
			loading: 'Yuborilmoqda...',
			success: 'Muvaffaqqiyatli yuborildi',
			error: "Ba'zi xatoliklar tufayli yuborilmadi",
		})
	}

	return (
		<>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3 mt-3'>
					<FormField
						control={form.control}
						name='proverb'
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Maqol <span className='text-red-500'>*</span>
								</FormLabel>
								<FormControl>
									<Input
										{...field}
										className='bg-secondary'
										placeholder='maqol yozish'
										disabled={isloading}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className='flex justify-end gap-4'>
						<Button
							type='button'
							size={'lg'}
							variant={'destructive'}
							onClick={() => form.reset()}
							disabled={isloading}
						>
							Tozalash
						</Button>
						<Button type='submit' size={'lg'} disabled={isloading}>
							Yuborish
						</Button>
					</div>
				</form>
			</Form>
		</>
	)
}

export default ProverbFiedsForm
