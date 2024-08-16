import { ComponentChart } from '@/components/charts/graph-chart'
import { Component } from '@/components/charts/pie-chart'

function HomePage() {
	return (
		<div className='h-[90vh] flex items-center  gap-2 mt-2'>
			<Component />
			<ComponentChart />
		</div>
	)
}

export default HomePage
