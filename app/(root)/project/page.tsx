'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

function Page() {
	return (
		<>
			<div className='container mx-auto grid min-h-[93vh] max-w-6xl grid-cols-2 gap-8 max-md:grid-cols-1 max-md:pt-32'>
				<div className='flex flex-col space-y-4 self-center'>
					<h1 className='font-space-grotesk text-5xl font-bold'>
						<span className='text-blue-500'>O&apos;zbekiston</span>dagi eng
						mashhur rasmiy, ijtimoiy veb-saytlardagi ilmiy-ma&apos;rifiy
						maqolalar <span className='text-blue-500'>statistikasi</span>
					</h1>
					<p className='text-muted-foreground'>
						Ma&apos;lumotlar rasmiy manbaalarga asoslangan
					</p>
					<div className='flex gap-4'>
						<Link href={'/project'}>
							<Button size={'lg'} rounded='full'>
								Statistikani ko&apos;rish
							</Button>
						</Link>
					</div>
				</div>

				<Image
					src={'/assets/about.svg'}
					alt='hero'
					width={480}
					height={480}
					className='self-end object-cover'
				/>
			</div>
			{/* Batafsil ma'lumot */}
			<div className='container mx-auto max-w-6xl max-md:pt-32'>
				<article className='text-muted-foreground lg:prose-xl'>
					<h1>Statistika haqida sarlavha</h1>
					<p>
						Statistika Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						A unde mollitia temporibus illo iste, omnis maiores ducimus vero
						veritatis deserunt distinctio obcaecati aliquid quam vel illum?
						Inventore suscipit et nobis!
					</p>
					<p>
						Statistika Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						A unde mollitia temporibus illo iste, omnis maiores ducimus vero
						veritatis deserunt distinctio obcaecati aliquid quam vel illum?
						Inventore suscipit et nobis! Lorem, ipsum dolor sit amet consectetur
						adipisicing elit. Nobis, beatae facere ducimus maxime iure delectus
						saepe vel ab voluptates quo.
					</p>

					<p>
						Statistika Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						A unde mollitia temporibus illo iste, omnis maiores ducimus vero
						veritatis deserunt distinctio obcaecati aliquid quam vel illum?
						Inventore suscipit et nobis!
					</p>
				</article>
			</div>
		</>
	)
}

export default Page
