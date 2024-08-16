import { Mail, Phone } from 'lucide-react'

async function Page() {
	return (
		<>
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1316.8203047107272!2d66.96102085470251!3d39.644797398263805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d18d2d1e7d5bd%3A0xa6176e47010064b6!2sScientific%20Library%20of%20Samarkand%20State%20University!5e0!3m2!1sen!2s!4v1722400363986!5m2!1sen!2s'
				loading='lazy'
				className='h-96 w-full'
			/>

			<div className='container mx-auto max-w-6xl'>
				<div className='mt-6 grid grid-cols-2 gap-4 max-md:grid-cols-1'>
					<div className='flex flex-col'>
						<h1 className='font-space-grotesk text-4xl font-bold'>Title</h1>
						<p className='mt-2 text-muted-foreground'>Description</p>

						<div className='mt-12 flex items-center gap-3'>
							<Mail className='size-4' />
							<p className='text-sm'>ilxomdeveloper@gmail.com</p>
						</div>
						<div className='mt-2 flex items-center gap-3'>
							<Phone className='size-4' />
							<p className='text-sm'>+998 77 123-21-15</p>
						</div>
					</div>

					<div>
						<h1 className='mb-2 font-space-grotesk text-4xl font-bold'>
							Contact
						</h1>
					</div>
				</div>
			</div>
		</>
	)
}

export default Page
