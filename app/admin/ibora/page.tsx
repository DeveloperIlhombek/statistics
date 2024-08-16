import { Separator } from '@/components/ui/separator'
import PhraseFiedsForm from './_components/phrase-fieds-form'

function Page() {
	return (
		<>
			<div className='mt-4 rounded-md bg-background p-10'>
				<h3 className='font-serif text-lg font-medium'>
					Yangi iboralar kiritish
				</h3>
				<Separator className='my-3' />
				<PhraseFiedsForm />
			</div>
		</>
	)
}

export default Page
