'use client'
import React from 'react'
import { MapSection } from './_components/MapSection'
import { ContactInfo } from './_components/ContactInfo'
import { ContactForm } from './_components/ContactForm'

export default function ContactPage() {
	return (
		<div className='relative min-h-screen'>
			{/* Background Effects */}
			<div className='fixed inset-0 -z-10'>
				{/* Primary Gradient */}
				<div className='absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900' />

				{/* Radial Gradients */}
				<div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(147,197,253,0.3),transparent_40%)]' />
				<div className='absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.1),transparent_40%)]' />

				{/* Grid Pattern */}
				<div className='absolute inset-0 bg-grid-blue-900/[0.03] dark:bg-grid-white/[0.02] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]' />
			</div>

			<div className='container relative mx-auto max-w-6xl px-4 pt-20'>
				{/* Title with enhanced gradient */}
				<h1 className='relative mb-12 text-center'>
					<span className='bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-6xl font-bold text-transparent'>
						Bizning manzilimiz
					</span>
					{/* Decorative underline */}
					<div className='absolute -bottom-4 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 opacity-80' />
				</h1>

				{/* Map Section */}
				<div className='relative'>
					<MapSection />
					{/* Decorative corner accents */}
					<div className='absolute -left-4 -top-4 h-16 w-16 rounded-tl-2xl border-l-2 border-t-2 border-blue-500/30' />
					<div className='absolute -right-4 -top-4 h-16 w-16 rounded-tr-2xl border-r-2 border-t-2 border-blue-500/30' />
				</div>

				{/* Contact Grid */}
				<div className='mt-12 grid grid-cols-2 gap-8 max-md:grid-cols-1'>
					<ContactInfo />
					<ContactForm />
				</div>
			</div>
		</div>
	)
}
