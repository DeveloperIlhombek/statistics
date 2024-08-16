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
import { articlSchema } from '@/lib/valitadions'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { categories, sourceOfsites } from '@/constants'
import { Button } from '@/components/ui/button'

function ArticleFiedsForm() {
	const form = useForm<z.infer<typeof articlSchema>>({
		resolver: zodResolver(articlSchema),
		defaultValues: defaultVal,
	})

	return (
		<>
			<Form {...form}>
				<form className='space-y-3 mt-3'>
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
										type='date'
										className='bg-secondary'
										placeholder='kun/oy/yil '
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
										<Select>
											<SelectTrigger className='w-full bg-secondary'>
												<SelectValue placeholder='Web-sahifalar' />
											</SelectTrigger>
											<SelectContent>
												{sourceOfsites.map(item => (
													<SelectItem key={item} value={item}>
														{item}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='source'
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Maqola turi<span className='text-red-500'>*</span>
									</FormLabel>
									<FormControl>
										<Select defaultValue={field.value}>
											<SelectTrigger className='w-full bg-secondary'>
												<SelectValue placeholder='Kategoriyalar' />
											</SelectTrigger>
											<SelectContent>
												{categories.map(item => (
													<SelectItem key={item} value={item}>
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
						>
							Tozalash
						</Button>
						<Button type='submit' size={'lg'}>
							Yuborish
						</Button>
					</div>
				</form>
			</Form>
		</>
	)
}

export default ArticleFiedsForm
const defaultVal = {
	article: '',
	dataOfCreate: '',
	source: '',
	kategoriya: '',
}
