import { Separator } from '@/components/ui/separator'
import ArticleFiedsForm from './_components/article-fields-form'

function Page() {
	return (
		<>
			<div className='mt-4 rounded-md bg-background p-10'>
				<h3 className='font-serif text-lg font-medium'>
					Yangi maqolalar kiritish
				</h3>
				<Separator className='my-3' />
				<ArticleFiedsForm />
			</div>
		</>
	)
}

export default Page
