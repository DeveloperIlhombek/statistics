import { Component } from '@/components/charts/pie-chart'
import Hero from './_components/hero'
import { DataTableDemo } from './_components/table'
import { Separator } from '@/components/ui/separator'
import { IboraTable } from './_components/ibora.table'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { OverallData } from '@/components/shared/overall-data'
import { ComponentLiner } from '@/components/charts/component-liner'
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
					{/* <ComponentLiner /> */}
				</div>
			</div>
			<h1>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
				cupiditate quibusdam ea omnis veritatis blanditiis, deserunt totam nobis
				asperiores error? Harum dolore recusandae architecto. Similique
				voluptatibus fuga dolores dolore pariatur harum, mollitia ea enim
				dolorem, et nesciunt. Aspernatur non quisquam quod vero et quaerat illum
				nam beatae, deleniti placeat nobis! Commodi fugiat eos similique, nobis
				perspiciatis ea, ullam dicta id dolor nemo quo? Asperiores, ab
				voluptatibus ipsa at, fugit enim eum vitae quas corporis illum dolorem
				omnis, debitis error doloribus. Nisi a tempora quibusdam ducimus omnis,
				obcaecati est quaerat saepe, sequi qui voluptatum harum? Et incidunt
				quia laboriosam. Magnam cumque est rem quidem non voluptate eum, nobism
				placeat vel aspernatur amet porro eveniet eum sapiente? Commodi iusto
				totam delectus dolor corporis magni similique fugiat. Ipsa deserunt
				accusantium incidunt!
			</h1>
		</div>
	)
}

export default HomePage
