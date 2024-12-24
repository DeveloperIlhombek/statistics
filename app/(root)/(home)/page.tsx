import { DataTableDemo } from './_components/table'
import { Separator } from '@/components/ui/separator'
import { IboraTable } from './_components/ibora.table'
import { OverallData } from '@/components/shared/overall-data'
import { DataArticle } from '@/components/charts/data-article'
import { FcStatistics } from 'react-icons/fc'
import { MultiLineChart } from '@/components/charts/multiline-chart'
import Hero from './_components/hero/Hero'
function HomePage() {
	return (
		<div>
			<Hero />
			<OverallData />
			<Separator className='dark:bg-gray-500 my-12' />
			<DataTableDemo />
			<Separator className='dark:bg-gray-500 my-12' />

			<IboraTable />
			<div className='flex justify-center items-center gap-4'>
				<FcStatistics className='text-6xl' />
				<h1 className='text-5xl text-blue-500 my-4 text-center font-bold'>
					Statistikalar
				</h1>
			</div>
			<div className='grid mb-24'>
				<div className=' max-sm:col-span-4'>
					<DataArticle />
				</div>
			</div>
			<div className='grid grid-cols-7 gap-4'>
				<div className='border w-[400] col-span-2 h-[400] ring-2 rounded-md grid grid-flow-row grid-rows-7'>
					<h1 className='row-span-2 text-center text-3xl text-blue-400 my-4'>
						Diagramma title
					</h1>
					<p className='text-center row-span-3'>Diagramma uchun tarif</p>
					<div className='row-span-2 border ring-1'>Sayt nomlari</div>
				</div>
				<div className='col-span-5'>
					<MultiLineChart />
				</div>
			</div>
		</div>
	)
}

export default HomePage
