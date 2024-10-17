'use client'

import { TrendingUp } from 'lucide-react'
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '@/components/ui/chart'

export const description = 'A multiple line chart'

const chartData = [
	{ month: 'January', desktop: 18, mobile: 8 },
	{ month: 'February', desktop: 30, mobile: 20 },
	{ month: 'March', desktop: 2, mobile: 12 },
	{ month: 'April', desktop: 7, mobile: 19 },
	{ month: 'May', desktop: 29, mobile: 3 },
	{ month: 'June', desktop: 14, mobile: 10 },
]

const chartConfig = {
	desktop: {
		label: 'Desktop',
		color: 'hsl(var(--chart-1))',
	},
	mobile: {
		label: 'Mobile',
		color: 'hsl(var(--chart-2))',
	},
} satisfies ChartConfig

export function MultiLineChart() {
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
							dataKey='desktop'
							type='monotone'
							stroke='var(--color-desktop)'
							strokeWidth={2}
							dot={false}
						/>
						<Line
							dataKey='mobile'
							type='monotone'
							stroke='var(--color-mobile)'
							strokeWidth={2}
							dot={false}
						/>
					</LineChart>
				</ChartContainer>
			</CardContent>
			<CardFooter>
				<div className='flex w-full items-start gap-2 text-sm'>
					<div className='grid gap-2'>
						<div className='flex items-center gap-2 font-medium leading-none'>
							Trending up by 5.2% this month <TrendingUp className='h-4 w-4' />
						</div>
						<div className='flex items-center gap-2 leading-none text-muted-foreground'>
							Showing total visitors for the last 6 months
						</div>
					</div>
				</div>
			</CardFooter>
		</Card>
	)
}
