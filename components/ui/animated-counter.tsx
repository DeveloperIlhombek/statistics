import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface AnimatedCounterProps {
	value: number | undefined
	className?: string
}

export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
	const [displayedCount, setDisplayedCount] = useState(0)

	useEffect(() => {
		if (value !== undefined) {
			const duration = 2000
			const steps = 20
			const stepDuration = duration / steps
			const increment = value / steps

			let currentStep = 0
			const counter = setInterval(() => {
				currentStep++
				if (currentStep === steps) {
					setDisplayedCount(value)
					clearInterval(counter)
				} else {
					setDisplayedCount(Math.floor(increment * currentStep))
				}
			}, stepDuration)

			return () => clearInterval(counter)
		}
	}, [value])

	return (
		<span className={cn('transition-all duration-200', className)}>
			{value === undefined ? '-' : displayedCount}
		</span>
	)
}
