'use client'

import { Separator } from '@/components/ui/separator'
import DefinitionProject from './_components/definition-project'
import Hero from './_components/hero'
import CountData from './_components/count-data'

function Page() {
	return (
		<>
			<Hero />
			<Separator className='my-4' />
			<CountData />
			<Separator className='my-4' />
			<DefinitionProject />
		</>
	)
}

export default Page
