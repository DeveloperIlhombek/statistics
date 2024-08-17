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
import { phraseSchema } from '@/lib/valitadions'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { createPhrase } from '@/actions/ibora.action'
import { toast } from 'sonner'

function PhraseFiedsForm() {
	const [isLoading, setIsLoading] = useState(false)
	const form = useForm<z.infer<typeof phraseSchema>>({
		resolver: zodResolver(phraseSchema),
		defaultValues: { phrase: '', description: '' },
	})

	function onSubmit(values: z.infer<typeof phraseSchema>) {
		console.log(values)

		setIsLoading(true)
		const promise = createPhrase({ ...values })
			.then(() => form.reset)
			.finally(() => setIsLoading(false))

		toast.promise(promise, {
			loading: 'Ibora yuborilmoqda',
			success: 'Ibora muvaffaqqiyatli yuborildi',
			error: "Ba'zi xatoliklar tufayli yuborilmadi",
		})
	}

	return (
		<>
			<Form {...form}>
				<form className='space-y-3 mt-3' onSubmit={form.handleSubmit(onSubmit)}>
					<FormField
						control={form.control}
						name='phrase'
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Ibora <span className='text-red-500'>*</span>
								</FormLabel>
								<FormControl>
									<Input
										{...field}
										className='bg-secondary'
										placeholder='Ibora yozish ...'
										disabled={isLoading}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='description'
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Qisqa ta&apos;rif <span className='text-red-500'>*</span>
								</FormLabel>
								<FormControl>
									<Input
										{...field}
										className='bg-secondary'
										placeholder="ta'rif yozish ..."
										disabled={isLoading}
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
							disabled={isLoading}
						>
							Tozalash
						</Button>
						<Button type='submit' size={'lg'} disabled={isLoading}>
							Yuborish
						</Button>
					</div>
				</form>
			</Form>
		</>
	)
}

export default PhraseFiedsForm
