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

function ProverbFiedsForm() {
	const form = useForm<z.infer<typeof proverbSchema>>({
		resolver: zodResolver(proverbSchema),
		defaultValues: defaultVal,
	})

	return (
		<>
			<Form {...form}>
				<form className='space-y-3 mt-3'>
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
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='definition'
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Qisqa ta&apos;rif <span className='text-red-500'>*</span>
								</FormLabel>
								<FormControl>
									<Input
										{...field}
										className='bg-secondary'
										placeholder="maqolni ta'riflab berish"
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

export default ProverbFiedsForm
const defaultVal = {
	prover: '',
	definition: '',
}
