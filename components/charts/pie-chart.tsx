'use client'

import { LabelList, Pie, PieChart } from 'recharts'
import { FiPieChart } from 'react-icons/fi'
import { BsCalendarDate } from 'react-icons/bs'

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '@/components/ui/chart'
import { ArticleType } from '@/app.type'
import React from 'react'
import { sourceOfsites } from '@/constants'

const sourceColors = [
	'hsl(var(--chart-1))',
	'hsl(var(--chart-2))',
	'hsl(var(--chart-3))',
	'hsl(var(--chart-4))',
	'hsl(var(--chart-5))',
]

export const chartConfig = sourceOfsites.reduce((config, source, index) => {
	config[source] = {
		label: source,
		color: sourceColors[index % sourceColors.length],
	}
	return config
}, {} as Record<string, { label: string; color: string }>)

interface FilteredArticleListProps {
	articles: ArticleType[]
}

export function PieChartComponent({ articles }: FilteredArticleListProps) {
	// Source counts for the articles
	const sourceCounts = articles.reduce((acc, article) => {
		acc[article.source] = (acc[article.source] || 0) + 1
		return acc
	}, {} as Record<string, number>)

	// Creating chart data
	const chartData = Object.entries(sourceCounts).map(([source, count]) => ({
		site: source,
		visitors: count,
		fill: chartConfig[source as keyof typeof chartConfig]?.color || '#ccc',
	}))

	return (
		<Card className='flex flex-col h-[70vh] ring-1'>
			<div className='grid grid-cols-4'>
				<div className='col-span-1'>
					<CardHeader className='items-center pb-0'>
						<CardTitle>
							<BsCalendarDate className='inline-block mr-2 text-3xl' />
							2020 - {new Date().getFullYear()} y.
						</CardTitle>
						<CardDescription> kiritilgan ma&apos;lumotlar soni</CardDescription>
					</CardHeader>
					<CardContent className='flex-1 pb-0 mt-6'>
						<ul className='flex flex-col gap-6 items-start  '>
							{chartData.map(data => (
								<li
									key={data.site}
									className='flex justify-center items-center gap-4'
								>
									<h1 className='text-yellow-500 font-bold capitalize'>
										{data.site}da{' '}
									</h1>
									<span className='text-2xl'>{data.visitors} </span> ta post
								</li>
							))}
						</ul>
					</CardContent>
				</div>
				<div className='col-span-3'>
					<CardHeader className='items-center pb-0'>
						<div className='flex justify-center items-center gap-4'>
							<FiPieChart className='text-5xl' />
							<CardTitle className='text-5xl'>Diagramma</CardTitle>
						</div>
						<CardDescription>2020 - {new Date().getFullYear()}</CardDescription>
					</CardHeader>
					<CardContent className='flex-1 pb-0'>
						<ChartContainer
							config={chartConfig}
							className='mx-auto aspect-square max-h-[60vh]'
						>
							<PieChart>
								<ChartTooltip
									content={<ChartTooltipContent nameKey='visitors' hideLabel />}
								/>
								<Pie data={chartData} dataKey='visitors' nameKey='site'>
									<LabelList
										dataKey='site'
										className='fill-background'
										stroke='none'
										fontSize={14}
										formatter={(value: keyof typeof chartConfig) =>
											chartConfig[value]?.label
										}
									/>
								</Pie>
							</PieChart>
						</ChartContainer>
					</CardContent>
				</div>
			</div>
		</Card>
	)
}
