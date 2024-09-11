import Hero from './_components/hero'
import { DataTableDemo } from './_components/table'
import { Separator } from '@/components/ui/separator'
import { IboraTable } from './_components/ibora.table'
import { OverallData } from '@/components/shared/overall-data'
import { DataArticle } from '@/components/charts/data-article'

function HomePage() {
	return (
		<div>
			<Hero />
			<Separator className='dark:bg-gray-500 my-12' />
			<OverallData />
			<Separator className='dark:bg-gray-500 my-12' />
			<DataTableDemo />
			<Separator className='dark:bg-gray-500 my-12' />

			<IboraTable />
			<h1 className='text-5xl text-blue-500 my-4 text-center font-bold'>
				Statistikalar
			</h1>
			<div className='grid mb-24'>
				<div className=' max-sm:col-span-4'>
					<DataArticle />
				</div>
			</div>
			<h1>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
				cupiditate quibusdam ea omnis veritatis blanditiis, deserunt totam nobis
				asperiores error? Harum dolore recusandae architecto. Similique
				voluptatibus fuga dolores dolore pariatur harum, mollitia ea enim
				dolorem, et nesciunt. Aspernatur non quisquam quod vero et quaerat illum
				nam beatae, deleniti placeat nobis! Commodi fugiat eos similique, nobis
			</h1>
		</div>
	)
}

export default HomePage
