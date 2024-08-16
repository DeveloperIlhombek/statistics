import { Separator } from '@/components/ui/separator'
import ProverbFiedsForm from './_components/proverb-fieds-form'

function Page() {
	return (
		<>
			<div className='mt-4 rounded-md bg-background p-10'>
				<h3 className='font-serif text-lg font-medium'>
					Yangi maqollar kiritish
				</h3>
				<Separator className='my-3' />
				<ProverbFiedsForm />
			</div>
		</>
	)
}

export default Page
