'use client'
import { dataOfChart, listOfsite } from '@/constants'
import Image from 'next/image'
import React from 'react'
import { Separator } from '@/components/ui/separator'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

function Page() {
	const { resolvedTheme } = useTheme()

	return (
		<div className='flex flex-col gap-4'>
			<div>
				<h1 className='text-center text-4xl  text-yellow-400 my-2'>
					Foydalanilgan web-sahifalar
				</h1>
				<div className='grid grid-cols-4 gap-4 hover:border-collapse'>
					{listOfsite.map(item => (
						<div
							key={item.label}
							className={cn(
								'rounded-xl p-4',
								resolvedTheme === 'dark' ? ' bg-slate-600' : ' bg-slate-300'
							)}
						>
							<h2 className='text-center font-extrabold text-2xl'>
								{item.label}
							</h2>
							<Separator className='my-2' />
							<div className='h-[70%]'>
								<Image
									src={item.image}
									alt={item.label}
									width={'150'}
									height={'150'}
									className='border-slate-300'
								/>
							</div>
							<Separator className='my-1' />
							<a href={item.url} target='_blank' className='text-center'>
								{item.url}
							</a>
						</div>
					))}
				</div>
			</div>
			<Separator className='bg-slate-600' />
			<h1 className='text-center text-4xl  text-yellow-400 my-2'>
				Foydalanilgan umumiy ma&apos;lumotlar
			</h1>
			<div className='grid grid-cols-3 justify-between items-center gap-6'>
				{dataOfChart.map(item => (
					<div
						key={item.label}
						className={cn(
							'border-separate rounded-xl p-6 flex flex-col items-center justify-center gap-2',
							resolvedTheme === 'dark' ? ' bg-slate-600' : ' bg-slate-300'
						)}
					>
						<h3 className='text-3xl text-center font-semibold'>{item.label}</h3>
						<h2 className='text-green-500 text-5xl'>{item.count}</h2>
					</div>
				))}
			</div>
		</div>
	)
}

export default Page
