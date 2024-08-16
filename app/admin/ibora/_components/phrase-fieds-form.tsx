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

function PhraseFiedsForm() {
	const form = useForm<z.infer<typeof phraseSchema>>({
		resolver: zodResolver(phraseSchema),
		defaultValues: { phrase: '' },
	})

	return (
		<>
			<Form {...form}>
				<form className='space-y-3 mt-3'>
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

export default PhraseFiedsForm
