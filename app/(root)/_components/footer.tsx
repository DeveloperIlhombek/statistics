'use client'

import Logo from '@/components/shared/logo'
import { Separator } from '@/components/ui/separator'
import { navLink } from '@/constants'
import { Mail, MapPin, PhoneCall } from 'lucide-react'
import Link from 'next/link'

function Footer() {
	return (
		<div className='mt-12 bg-secondary pt-12 max-md:px-4'>
			<div className='container mx-auto max-w-7xl pb-12'>
				<div className='grid grid-cols-1 gap-12 md:grid-cols-4'>
					<div className='flex flex-col space-y-3 md:col-span-2'>
						<Logo />
						<p>heroDescription</p>
					</div>

					<div className='flex flex-col space-y-3'>
						<h1 className='font-space-grotesk text-3xl'>Sahifalar</h1>
						<div className='flex flex-col space-y-3 pt-6'>
							{navLink.map(item => (
								<Link
									key={item.route}
									href={`/${item.route}`}
									className='font-medium transition-all hover:text-blue-500 hover:underline'
								>
									{item.name}
								</Link>
							))}
						</div>
					</div>

					<div className='flex flex-col space-y-3'>
						<h1 className='font-space-grotesk text-3xl'>contacts</h1>
						<div className='flex flex-col space-y-3 pt-6'>
							<div className='flex items-center space-x-3'>
								<PhoneCall size={20} />
								<div className='flex flex-col space-y-1'>
									<a
										className='text-sm hover:text-blue-500 hover:underline dark:hover:text-blue-300'
										href='tel:+998900000000'
									>
										+998 (77) 123-21-15
									</a>
									<Separator className='dark:bg-gray-500' />
									<a
										className='text-sm hover:text-blue-500 hover:underline dark:hover:text-blue-300'
										href='tel:+31220777777'
									>
										+998 99 457-32-70
									</a>
								</div>
							</div>

							<div className='flex items-center space-x-3'>
								<Mail size={20} />
								<a
									className='text-sm hover:text-blue-500 hover:underline dark:hover:text-blue-300'
									href='mailto:info@sammi.ac'
								>
									ilxomdeveloper@gmail.com
								</a>
							</div>

							<div className='flex items-center space-x-3'>
								<MapPin size={20} />
								<span className='text-sm'>Samarkand city, Uzbekistan</span>
							</div>
						</div>
					</div>
				</div>

				<div className='pt-12'>
					<Separator className='mb-3 dark:bg-gray-500' />
					<div className='flex gap-4'>
						<p>© {new Date().getFullYear()}.copyright</p>
						<a href='https://t.me/Ilhomdeveloper'>Created by IlhomDeveloper</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
