import { Component } from '@/components/charts/pie-chart'
import Hero from './_components/hero'
import { DataTableDemo } from './_components/table'
import { Separator } from '@/components/ui/separator'
import { IboraTable } from './_components/ibora.table'
import { BarChartComponent } from '@/components/charts/bar-chart'
import { Button } from '@/components/ui/button'

function HomePage() {
	return (
		<div>
			<Hero />
			<Separator className='dark:bg-gray-500 my-12' />
			<DataTableDemo />
			<Separator className='dark:bg-gray-500 my-12' />

			<IboraTable />
			<h1 className='text-5xl text-blue-500 my-4 text-center font-bold'>
				Diagrammalar
			</h1>
			<div className='grid grid-cols-4 gap-2 mb-24 max-sm:grid-cols-2'>
				<div className='col-span-3 max-sm:col-span-4'>
					<BarChartComponent />
				</div>
				<div className='col-span-1 max-sm:col-span-4 flex flex-col gap-4'>
					<Component />
					<Button className='h-12'>Ma&apos;lumot qo&apos;shish </Button>
				</div>
			</div>
		</div>
	)
}

export default HomePage
