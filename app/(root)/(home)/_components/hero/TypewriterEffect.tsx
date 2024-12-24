'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface Word {
	text: string
	className?: string
}

interface TypewriterEffectProps {
	words: Word[]
}

export function TypewriterEffect({ words }: TypewriterEffectProps) {
	const [currentWordIndex, setCurrentWordIndex] = React.useState(0)

	React.useEffect(() => {
		const interval = setInterval(() => {
			setCurrentWordIndex(prev => (prev + 1) % words.length)
		}, 2000)

		return () => clearInterval(interval)
	}, [words.length])

	return (
		<span className='inline-block'>
			{words.map((word, index) => (
				<motion.span
					key={index}
					initial={{ opacity: 0, y: 20 }}
					animate={{
						opacity: currentWordIndex === index ? 1 : 0,
						y: currentWordIndex === index ? 0 : 20,
					}}
					transition={{ duration: 0.3 }}
					className={`absolute ${word.className}`}
					style={{ display: currentWordIndex === index ? 'inline' : 'none' }}
				>
					{word.text}
				</motion.span>
			))}
			<span className='invisible'>{words[0].text}</span>
		</span>
	)
}
