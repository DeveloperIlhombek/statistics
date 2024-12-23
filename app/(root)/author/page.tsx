'use client'
import React from 'react'
import { GraduationCap, Code } from 'lucide-react'
import { AuthorCard } from './_components/AuthorCard'
import { CursorEffect } from './_components/CursorEffect'

export default function AuthorsPage() {
	const authors = [
		{
			name: 'Prof. Abdulla Karimov',
			role: 'Ilmiy ish rahbari',
			description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
			image: '/assets/detailed.svg',
			icon: <GraduationCap className='h-6 w-6' />,
			isReversed: false,
		},
		{
			name: 'Ilhom Toshqulov',
			role: "Dasturiy ta'minot mutaxassisi",
			description: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`,
			image: '/assets/dev.jpg',
			icon: <Code className='h-6 w-6' />,
			isReversed: true,
		},
	]

	return (
		<div className='relative min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 pt-20 dark:from-gray-900 dark:to-gray-800'>
			<CursorEffect />

			{/* Background Pattern */}
			<div className='absolute inset-0 bg-grid-gray-900/[0.04] dark:bg-grid-white/[0.02]' />

			<div className='container mx-auto'>
				<h1 className='mb-12 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-center text-4xl font-bold text-transparent'>
					Muallif haqida ma&apos;lumotlar
				</h1>

				{authors.map(author => (
					<AuthorCard key={author.name} {...author} />
				))}
			</div>
		</div>
	)
}
