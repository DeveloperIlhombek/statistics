'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

function Hero() {
	return (
		<>
			<div className='container mx-auto grid min-h-[80vh] max-w-6xl grid-cols-2 gap-12 max-md:grid-cols-1 max-md:pt-32'>
				<div className='flex flex-col space-y-4 self-center'>
					<h1 className='font-space-grotesk text-5xl font-bold'>
						Veb-sahifalarda foydalanilgan maqola, ibora va maqol haqida tez va
						oson <span className='text-blue-500'>ma&apos;lumotlar</span>
					</h1>
					<p className='text-muted-foreground'>
						web-sahifalar ibora va maqollardan qanchalik ko&apos;p
						foydalanilganligi haqida diagrammalar orqali bilib oling{' '}
					</p>
					<div className='flex gap-4'>
						<Link href={'/courses'}>
							<Button variant={'outline'} size={'lg'} rounded={'full'}>
								Iboralar
							</Button>
						</Link>
						<Link href={'/courses'}>
							<Button size={'lg'} rounded={'full'}>
								Diagramma
							</Button>
						</Link>
					</div>
				</div>
				<Image
					src={'/assets/hero.png'}
					alt='hero'
					width={520}
					height={520}
					className='self-end object-cover'
				/>
			</div>
		</>
	)
}

export default Hero
