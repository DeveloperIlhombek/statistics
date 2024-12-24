'use client'

import React from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'

const SignInButton = dynamic(
	() => import('@clerk/nextjs').then(mod => mod.SignInButton),
	{ ssr: false }
)
const SignUpButton = dynamic(
	() => import('@clerk/nextjs').then(mod => mod.SignUpButton),
	{ ssr: false }
)

export function AuthButtons() {
	return (
		<div className='flex flex-col gap-2 sm:flex-row sm:items-center'>
			<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
				<SignInButton>
					<Button variant='default' className='w-full'>
						Kirish
					</Button>
				</SignInButton>
			</motion.div>

			<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
				<SignUpButton>
					<Button variant='secondary' className='w-full'>
						Ro&apos;yxatdan o&apos;tish
					</Button>
				</SignUpButton>
			</motion.div>
		</div>
	)
}
