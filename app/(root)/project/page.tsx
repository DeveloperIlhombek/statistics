'use client'

import React from 'react'
import { Separator } from '@/components/ui/separator'
import Hero from './_components/hero'
import CountData from './_components/count-data'
import DefinitionProject from './_components/definition-project'

export default function ProjectPage() {
	return (
		<main className='relative min-h-screen overflow-x-hidden'>
			<Hero />
			<Separator className='my-4' />
			<CountData />
			<Separator className='my-4' />
			<DefinitionProject />
		</main>
	)
}
