import { Separator } from '@/components/ui/separator'

interface DataCardProps {
	title: string
	count: number | undefined
}

const DataCard: React.FC<DataCardProps> = ({ title, count }) => (
	<div className='border-2 border-slate-400 border-solid col-span-1 ring-4 rounded-md h-48'>
		<h2 className='text-center py-6 text-4xl'>{title}</h2>
		<Separator className='bg-slate-500 h-1' />
		<div className='text-center py-6 text-6xl'>{count ?? '-'}</div>
	</div>
)

export default DataCard
