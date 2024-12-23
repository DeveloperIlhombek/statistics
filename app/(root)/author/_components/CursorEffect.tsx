import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export const CursorEffect = () => {
	const cursorRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (cursorRef.current) {
				cursorRef.current.style.left = `${e.clientX}px`
				cursorRef.current.style.top = `${e.clientY}px`
			}
		}

		window.addEventListener('mousemove', handleMouseMove)
		return () => window.removeEventListener('mousemove', handleMouseMove)
	}, [])

	return (
		<motion.div
			ref={cursorRef}
			className='pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 z-50'
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			transition={{ duration: 0.2 }}
		>
			<motion.div
				className='relative flex h-8 w-8 items-center justify-center'
				animate={{
					scale: [1, 1.2, 1],
					rotate: [0, 180, 360],
				}}
				transition={{
					duration: 2,
					repeat: Infinity,
					ease: 'linear',
				}}
			>
				<div className='absolute inset-0 rounded-full bg-blue-500/20' />
				<div className='absolute inset-0 rounded-full bg-blue-500/10 animate-ping' />
				<div className='h-2 w-2 rounded-full bg-blue-500' />
			</motion.div>
		</motion.div>
	)
}
