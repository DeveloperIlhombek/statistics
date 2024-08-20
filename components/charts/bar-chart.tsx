'use client'

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from 'recharts'

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '@/components/ui/chart'
import { useEffect, useState } from 'react'
import { getArticle } from '@/actions/maqola.action'
import { getProverb } from '@/actions/maqol.action'
import { getPhrase } from '@/actions/ibora.action'
const chartData = [
	{ year: '2020', desktop: 186 },
	{ year: '2021', desktop: 305 },
	{ year: '2022', desktop: 237 },
	{ year: '2023', desktop: 73 },
	{ year: '2024', desktop: 209 },
]

const chartConfig = {
	desktop: {
		label: 'Desktop',
		color: 'hsl(var(--chart-1))',
	},
} satisfies ChartConfig

interface DataCardProps {
	title: string
	count: number | undefined
}

const DataCards: React.FC<DataCardProps> = ({ title, count }) => (
	<div className='border-2 border-slate-400 border-solid col-span-1 ring-2 rounded-md flex flex-wrap flex-row'>
		<h2 className='text-center p-2 text-2xl'>{title}</h2>
		<div className='text-center py-2 text-3xl  p-4'>{count ?? '-'}</div>
	</div>
)

export function BarChartComponent() {
	const [articles, setArticles] = useState<number | undefined>(undefined)
	const [proverbs, setProverbs] = useState<number | undefined>(undefined)
	const [phrases, setPhrases] = useState<number | undefined>(undefined)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const [articleData, proverbData, phraseData] = await Promise.all([
					getArticle(),
					getProverb(),
					getPhrase(),
				])
				setArticles(articleData?.length)
				setProverbs(proverbData?.length)
				setPhrases(phraseData?.length)
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}

		fetchData()
	}, [])

	return (
		<Card>
			<CardHeader>
				<CardTitle className='py-2'>Bar Chart - Label</CardTitle>
				<CardDescription>2020-{new Date().getFullYear()}</CardDescription>
			</CardHeader>
			<div className='grid grid-cols-4 '>
				<CardContent className='col-span-3 max-sm:col-span-4'>
					<ChartContainer config={chartConfig} className='h-[55vh] w-2/3'>
						<BarChart
							accessibilityLayer
							data={chartData}
							margin={{
								top: 20,
							}}
						>
							<CartesianGrid vertical={false} />
							<XAxis
								dataKey='year'
								tickLine={false}
								tickMargin={10}
								axisLine={false}
								tickFormatter={value => value.slice(0, 4)}
							/>
							<ChartTooltip
								cursor={false}
								content={<ChartTooltipContent hideLabel />}
							/>
							<Bar dataKey='desktop' fill='var(--color-desktop)' radius={8}>
								<LabelList
									position='top'
									offset={12}
									className='fill-foreground'
									fontSize={12}
								/>
							</Bar>
						</BarChart>
					</ChartContainer>
				</CardContent>

				<Card className='max-sm:col-span-4'>
					<CardHeader>
						<CardTitle className='py-1 text-center text-blue-500'>
							Barcha ma&apos;lumotlar
						</CardTitle>
						<CardDescription>Maqola, ibora, maqollar soni </CardDescription>
					</CardHeader>
					<CardContent>
						<div className='flex flex-col gap-4'>
							<DataCards title='Maqolalar' count={articles} />
							<DataCards title='Iboralar' count={phrases} />
							<DataCards title='Maqollar' count={proverbs} />
						</div>
					</CardContent>
				</Card>
			</div>
		</Card>
	)
}
