import { ComponentChart } from '@/components/charts/graph-chart'
import { Component } from '@/components/charts/pie-chart'
import Hero from './_components/hero'
import { DataTableDemo } from './_components/table'
import { Separator } from '@/components/ui/separator'

function HomePage() {
	return (
		<div>
			<Hero />
			<Separator className='dark:bg-gray-500 my-12' />
			<DataTableDemo />
			<Separator className='dark:bg-gray-500 my-12' />

			<h1 className='text-5xl text-blue-500 my-4 text-center font-bold'>
				Diagrammalar
			</h1>
			<div className='grid grid-cols-4 gap-2 mb-24'>
				<div className='col-span-3'>
					<ComponentChart />
				</div>
				<div className='col-span-1'>
					<Component />
				</div>
			</div>
			<span className='underline decoration-sky-500'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
				pariatur quasi ratione adipisci facilis! Magni voluptates amet quasi
				repellat impedit optio vero veniam, error quas, architecto fugiat quod.
				Consequatur iusto vel quibusdam expedita incidunt officia placeat, minus
				blanditiis, earum tempora, nesciunt dolorum dignissimos quos tempore rem
				ratione saepe sapiente odit.
			</span>
		</div>
	)
}

export default HomePage
