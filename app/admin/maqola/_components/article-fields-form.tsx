'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Textarea } from '@/components/ui/textarea'

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { articleSchema } from '@/lib/valitadions'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { sourceOfsites } from '@/constants'
import { Button } from '@/components/ui/button'
import { createArticle } from '@/actions/maqola.action'
import { useState } from 'react'
import { toast } from 'sonner'

const defaultVal = {
	article: '',
	dataOfCreate: '',
	source: '',
}

function ArticleFiedsForm() {
	const [isLoading, setIsLoading] = useState(false)
	const form = useForm<z.infer<typeof articleSchema>>({
		resolver: zodResolver(articleSchema),
		defaultValues: defaultVal,
	})

	function onSubmit(values: z.infer<typeof articleSchema>) {
		setIsLoading(true)

		const promise = createArticle({ ...values })
			.then(() => form.reset())
			.finally(() => setIsLoading(false))
		toast.promise(promise, {
			loading: 'Article yuborilmoqda',
			success: 'Article muvaffaqqiyatli yuborildi',
			error: "Ba'zi xatoliklar tufayli yuborilmadi",
		})
	}

	return (
		<>
			<Form {...form}>
				<form className='space-y-3 mt-3' onSubmit={form.handleSubmit(onSubmit)}>
					<FormField
						control={form.control}
						name='article'
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Maqola <span className='text-red-500'>*</span>
								</FormLabel>
								<FormControl>
									<Textarea
										{...field}
										className='bg-secondary'
										placeholder='maqola yozish'
										disabled={isLoading}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='dataOfCreate'
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Maqola manbaga kiritilgan sanasi
									<span className='text-red-500'>*</span>
								</FormLabel>
								<FormControl>
									<Input
										{...field}
										className='bg-secondary'
										placeholder='kun/oy/yil '
										disabled={isLoading}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className='grid grid-cols-2 gap-4'>
						<FormField
							control={form.control}
							name='source'
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Manbaa<span className='text-red-500'>*</span>
									</FormLabel>
									<FormControl>
										<Select
											defaultValue={field.value}
											onValueChange={field.onChange}
										>
											<SelectTrigger className='w-full bg-secondary'>
												<SelectValue placeholder='Web-sahifalar' />
											</SelectTrigger>
											<SelectContent>
												{sourceOfsites.map(item => (
													<SelectItem
														key={item}
														value={item}
														disabled={isLoading}
													>
														{item}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									</FormControl>
								</FormItem>
							)}
						/>
					</div>

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

export default ArticleFiedsForm
