'use client'
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '@/components/ui/chart'
import { useEffect, useState } from 'react'
import { getArticle } from '@/actions/maqola.action'
import { IArticles } from '@/type'
import { formatDateToMonthYear } from '@/lib/utils'

export const description = 'A multiple line chart'

// chartConfig ni e'lon qilish
const chartConfig = {
	uzA: {
		label: 'UzA',
		color: 'hsl(var(--chart-1))',
	},
	eduuz: {
		label: 'edu.uz',
		color: 'hsl(var(--chart-2))',
	},
	eduprofedu: {
		label: 'eduprofedu',
		color: 'hsl(var(--chart-3))',
	},
	ziyouz: {
		label: 'ziyouz',
		color: 'hsl(var(--chart-4))',
	},
	natlib: {
		label: 'natlib',
		color: 'hsl(var(--chart-5))',
	},
} satisfies ChartConfig

function groupByMonthYear(articles: IArticles[]) {
	const groupedData: { [key: string]: any } = {}

	articles.forEach(article => {
		const monthYear = formatDateToMonthYear(article.dataOfCreate)
		const source = article.source

		if (!groupedData[monthYear]) {
			groupedData[monthYear] = {
				month: monthYear,
				uzA: 0,
				eduuz: 0,
				eduprofedu: 0,
				ziyouz: 0,
				natlib: 0,
			}
		}

		if (source === 'UzA') {
			groupedData[monthYear].uzA += 1
		} else if (source === 'edu.uz') {
			groupedData[monthYear].eduuz += 1
		} else if (source === 'edu.profedu.uz') {
			groupedData[monthYear].eduprofedu += 1
		} else if (source === 'ziyouz.uz') {
			groupedData[monthYear].ziyouz += 1
		} else if (source === 'natlib') {
			groupedData[monthYear].natlib += 1
		}
	})

	const sortedData = Object.values(groupedData).sort((a: any, b: any) => {
		const dateA = new Date(a.month)
		const dateB = new Date(b.month)

		return dateA.getTime() - dateB.getTime()
	})

	return sortedData
}

export function MultiLineChart() {
	const [articles, setArticles] = useState<IArticles[]>([])
	const [chartData, setChartData] = useState<any[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchArticles = async () => {
			try {
				const data = await getArticle()
				setArticles(data || [])
				const groupedData = groupByMonthYear(data || [])
				setChartData(groupedData)
			} catch (error) {
				console.error('Error fetching articles:', error)
			} finally {
				setLoading(false)
			}
		}

		fetchArticles()
	}, [])

	return (
		<Card className='max-w-5xl ring-2'>
			<CardHeader>
				<CardTitle>Chiziqli diagramma</CardTitle>
			</CardHeader>
			<CardContent className='w-full h-full'>
				<ChartContainer config={chartConfig}>
					<LineChart
						accessibilityLayer
						data={chartData}
						height={400}
						width={900}
						margin={{ left: 10, right: 10 }}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey='month'
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							tickFormatter={value => value.slice(0, 3)}
						/>
						<ChartTooltip cursor={false} content={<ChartTooltipContent />} />
						<Line
							dataKey='uzA'
							type='monotone'
							stroke='var(--color-uzA)'
							strokeWidth={2}
							dot={false}
						/>
						<Line
							dataKey='eduuz'
							type='monotone'
							stroke='var(--color-eduuz)'
							strokeWidth={2}
							dot={false}
						/>
						<Line
							dataKey='eduprofedu'
							type='monotone'
							stroke='var(--color-eduprofedu)'
							strokeWidth={2}
							dot={false}
						/>
						<Line
							dataKey='ziyouz'
							type='monotone'
							stroke='var(--color-ziyouz)'
							strokeWidth={2}
							dot={false}
						/>
						<Line
							dataKey='natlib'
							type='monotone'
							stroke='var(--color-natlib)'
							strokeWidth={2}
							dot={false}
						/>
					</LineChart>
				</ChartContainer>
			</CardContent>
		</Card>
	)
}
